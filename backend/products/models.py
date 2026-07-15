import mongoengine as me
from django.contrib.auth.hashers import make_password, check_password


class Product(me.Document):
    title = me.StringField(required=True)
    price = me.FloatField(required=True)
    description = me.StringField()
    image = me.URLField()
    category = me.StringField()

    def __str__(self):
        return self.title


class User(me.Document):
    username = me.StringField(required=True, unique=True, max_length=100)
    password = me.StringField(required=True)

    meta = {
        "collection": "users"
    }

    def set_password(self, raw_password):
        self.password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.password)

    def __str__(self):
        return self.username