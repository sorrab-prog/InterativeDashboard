from django.contrib import admin
from django.urls import path, include
from django.utils.html import format_html
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin-auth-api/', include('admin_auth.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),]

admin.site.site_header =  format_html('<div style="width:100%;height:100px;display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:center;"><img src="https://lh3.googleusercontent.com/jxDT-_DeUCR3pk6FQckMpiRroDsUTzSWd4MfRBSiONeFwgZ56A2UEEESE4waG6ZDjHzRmpqGV8d_k6QeBxTSYNP4MpLgpPrCMJoVdvX9E2y04Gns5aFpyAVh3E9-eTJCkB-6gWxAKo6p2BEnqR2jK7m72C_nHYkWn3tQEw5rWHFm7pYoIxStqfRujIqxiuKJTkNXRJd6eo7SKdWyEUHJN50hnf4IWlrUVVssdkyGK4PPt-xirqagUaUxJIvdsL3HjIWjOv5K5hzZY5FA1EmXgtHPWjslD9w9ChGZWDoeycZIBIA5g0qnTy0HHWDIEPx71EDC-vJygh2gJtIYm2o8FFlEAz_k3sxayP3kd-3gmWlx-btKxWcYbVg9HRiGgbZljd-RrMuInm6ApoLcLQkYd171lPH8e9ix5EwJ-GSvj6lQQVjTIzUIXMtv7UhzTPj7Yz9IffgdeMkjiDvqT95mtMvLUMTw3_6eBjrvCFEuRMV4MZmmF8aR-_NxYLEa5brk-bN4O8PWUfD1xV9gQDivFSaFmO0M8sbxaxo917q6TcvzjowxoN-cTIa3EHepCjuzfBSrUs5uifeHKk-BFN38H-8JZAnIbwM8NbPUIPAkMcDgKOqtjSOVP7F64ECHIraOgWTIwd-wFp7nP6enWzYFv0msYPUIxuSpgxZBJqq8kM3CaUx8cQbsrSZajC_4zoNB960vJsbwUoU22D9uHKa0hrJlDdn9bsHBquZC_uDC9bD59nyKmnTwufSzlkkLvdP6cWhPNPbIQ1fBtwBEMX_iW0VZ1Zv95LACY-ZWgoAs3ZBK-INndywFRI45LrxGHjHwOiFU-1HAg_QWC-bl16iH-Y7eS_mkbeATPwxqFgrlJz_XWIiy1T8bPaIJxYaqRzDTV1W9I-PPZ1yTUhtmm-mgB8l4rSswPmYi5qDrCQ=s500-no?authuser=0" style="width:auto;height:100%;"></img></div>')
admin.site.index_title = "FitBank - DashBoard Admin Home"
admin.site.site_title = "FitBank - Dashboard"