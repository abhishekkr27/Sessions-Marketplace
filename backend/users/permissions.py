from rest_framework.permissions import BasePermission

class IsCreator(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'creator'