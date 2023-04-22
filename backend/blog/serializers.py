from .models import Post, Tag
from rest_framework import serializers


class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ['name']


class PostSerializer(serializers.HyperlinkedModelSerializer):
    author_name = serializers.CharField(source='author.user.first_name')
    tags = TagSerializer(read_only=True, many=True)

    class Meta:
        model = Post
        fields = ['title', 'subtitle', 'slug', 'body', 'meta_description', 'date_created', 'publish_date',
                  'author_name', 'tags', 'image']
