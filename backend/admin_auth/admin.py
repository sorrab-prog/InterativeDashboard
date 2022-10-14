from django.contrib import admin
from .models import UserAdmin

class UserAdminDisplay(admin.ModelAdmin):
    list_display = ('username', 'name', 'email')
    
admin.site.register(UserAdmin, UserAdminDisplay)