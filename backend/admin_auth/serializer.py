from rest_framework import serializers
from .models import UserAdmin

class GetUserAdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAdmin
        fields = ('email', 'name', 'start_date', 'is_active')