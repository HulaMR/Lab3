from django.db import models


class Todo(models.Model):
    todo = models.CharField(max_length=512, null=True)
    create_date = models.DateTimeField(auto_now=True, null=True)

    def __str__(self):
        return self.todo
