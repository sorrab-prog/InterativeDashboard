from django.urls import path
from .views import LoginView, UserAdminView

urlpatterns = [
    # Endpoint to log-in user
    path('login/', LoginView.as_view(), name="Log-in"),
    # Endpoint to see user informations
    path('user/', UserAdminView.as_view(), name="User Informations")
]