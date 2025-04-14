from django.urls import path

from api import views_cbv
from api.views.cbv.company_views import CompanyListCreateAPIView, CompanyDetailAPIView, CompanyVacanciesAPIView
from api.views.cbv.vacancy_views import VacancyListCreateAPIView, VacancyDetailAPIView, TopTenVacanciesAPIView
from .views.fbv import company_views, vacancy_views



urlpatterns = [
  # Function-based views
  path('companies/', CompanyListCreateAPIView.as_view()),
  path('companies/<int:id>/', CompanyDetailAPIView.as_view()),
  path('companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view()),
  path('vacancies/', VacancyListCreateAPIView.as_view()),
  path('vacancies/<int:id>/', VacancyDetailAPIView.as_view()),
  path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view()),

  # Class-based views
  path('cbv/companies/', views_cbv.CompanyListCreateView.as_view()),
  path('cbv/companies/<int:pk>/', views_cbv.CompanyDetailView.as_view()),
  path('cbv/vacancies/', views_cbv.VacancyListCreateView.as_view()),
  path('cbv/vacancies/<int:pk>/', views_cbv.VacancyDetailView.as_view()),
]
