from django.shortcuts import render
from django.http import HttpResponse


def authorisation(request):
    return HttpResponse('This page will be the page of authorisation.')