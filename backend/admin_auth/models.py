from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone
from django.db.models.signals import pre_save
from django.dispatch import receiver

class CustomAccountManager(BaseUserManager):
    """
    Method to create user via terminal
    """
    def create_superuser(self, username, password, **other_fields):
        """
        If user is created via terminal, it's automatic staff, superuser, and its active in the system
        """
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)
        
        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser deve estar com o status: is_staff = True')
            
        if other_fields.get('is_superuser') is not True:
            raise ValueError('Superuser deve estar com o status: is_superuser = True')
            
        return self.create_user(username, password, **other_fields)
    
    """
    Method to encrypt password
    """
    def create_user(self, username, password, **other_fields):
        if not username:
            raise ValueError("Você deve providenciar um nome de usuário.")
        
        user = self.model(username = username, **other_fields)
        """
        Django function to encrypt password
        """
        user.set_password(password)
        user.save()
        return user
    
class UserAdmin(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(verbose_name = "Usuário", max_length = 255, blank = False, null = False, unique = True)
    email = models.EmailField(verbose_name = "Endereço de e-mail", blank = True, null = True)
    name = models.CharField(verbose_name = 'Nome Completo', max_length = 255, blank = False, null = False)
    start_date = models.DateTimeField(verbose_name = "Data de início", default = timezone.now)
    is_staff = models.BooleanField(verbose_name = "É funcionário", default=False, help_text = 'O usuário estará habilitado para acessar o site administrativo')
    is_active = models.BooleanField(verbose_name = "Está ativo", default=False, help_text = 'O usuário estará ativo para acessar o dashboard e o site administrativo')
    
    objects = CustomAccountManager()
    
    USERNAME_FIELD = 'username'
    
    def __str__(self):
        return self.username
    
    class Meta:
        verbose_name_plural = "Usuários"