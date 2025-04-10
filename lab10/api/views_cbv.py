from rest_framework import generics, mixins
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer

# --- Company Views ---

class CompanyListCreateView(generics.GenericAPIView,
                            mixins.ListModelMixin,
                            mixins.CreateModelMixin):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class CompanyDetailView(generics.GenericAPIView,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.DestroyModelMixin):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

    def get(self, request, pk):
        return self.retrieve(request, pk=pk)

    def put(self, request, pk):
        return self.update(request, pk=pk)

    def delete(self, request, pk):
        return self.destroy(request, pk=pk)

# --- Vacancy Views ---

class VacancyListCreateView(generics.GenericAPIView,
                            mixins.ListModelMixin,
                            mixins.CreateModelMixin):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class VacancyDetailView(generics.GenericAPIView,
                        mixins.RetrieveModelMixin,
                        mixins.UpdateModelMixin,
                        mixins.DestroyModelMixin):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, pk):
        return self.retrieve(request, pk=pk)

    def put(self, request, pk):
        return self.update(request, pk=pk)

    def delete(self, request, pk):
        return self.destroy(request, pk=pk)
