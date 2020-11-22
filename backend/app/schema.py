from graphene_django import DjangoObjectType
import graphene
from app.models import UserModel, MapModel



class UserType(DjangoObjectType):
    class Meta:
        model = UserModel
        fields = ("id", "name", "last_name")

class Maps(DjangoObjectType):
    class Meta:
        model = MapModel
        fields = ("id", "name", "image")


class Query(graphene.ObjectType):
    users = graphene.List(UserType)
    maps = graphene.List(Maps)

    def resolve_users(self, info):
        return UserModel.objects.all()

    def resolve_maps(self, info):
        return MapModel.objects.all()


class CreateUser(graphene.Mutation):
    id = graphene.Int()
    name = graphene.String()
    last_name = graphene.String()

    class Arguments:
        name = graphene.String()
        last_name = graphene.String()

    def mutate(self, info, name, last_name):
        user = UserModel(name=name, last_name=last_name)
        user.save()

        return CreateUser(
            id=user.id,
            name=user.name,
            last_name=user.last_name,
        )

class CreateMap(graphene.Mutation):
    id = graphene.Int()
    name = graphene.String()
    image = graphene.String()

    class Arguments:
        name = graphene.String()
        image = graphene.String()

    def mutate(self, info, name, image):
        map = MapModel(name=name, image=image)
        map.save()

        return CreateMap(
            id=map.id,
            name=map.name,
            image=map.image,
        )


class Mutation(graphene.ObjectType):
    create_user = CreateUser.Field()
    create_map = CreateMap.Field()


schema = graphene.Schema(
    query=Query,
    mutation=Mutation
)
