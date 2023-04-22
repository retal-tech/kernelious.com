from rest_framework import viewsets
from rest_framework import permissions
from .serializers import PostSerializer
from .models import Post
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404



class PostViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Post.objects.filter(published=True).order_by('-publish_date')
    serializer_class = PostSerializer

    # permission_classes = [permissions.IsAuthenticated]

    @action(detail=False)
    def recent_posts(self, request):
        queryset = Post.objects.filter(published=True).order_by('-publish_date')[:5]

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Post.objects.filter(slug__exact=pk)
        user = get_object_or_404(queryset)
        serializer = PostSerializer(user)
        return Response(serializer.data)


