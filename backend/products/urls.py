from rest_framework.routers import DefaultRouter
from django.urls import path
from .views import ProductViewSet, login_view

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='product')

urlpatterns = router.urls + [
    path('login/', login_view, name='login'),
]