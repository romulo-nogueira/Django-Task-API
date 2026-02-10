from django.urls import path
from tasks.views import task_list, task_complete, task_delete

urlpatterns=[
  path('task/', task_list, name='task_list'),
  path('task/complete/<int:task_id>', task_complete, name='task_complete'),
  path('task/delete/<int:task_id>', task_delete, name='task_delete'),
]
  

