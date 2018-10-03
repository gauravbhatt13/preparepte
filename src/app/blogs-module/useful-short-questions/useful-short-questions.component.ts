import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useful-short-questions',
  templateUrl: './useful-short-questions.component.html',
  styleUrls: ['./useful-short-questions.component.css']
})
export class UsefulShortQuestionsComponent implements OnInit {
  private questions: any;
  constructor() {
    this.questions = [{ question: 'Who do you call in case of leaking pipeline', answer: 'plumber' },
    { question: 'Microscope is used to see', answer: 'Micro-organism' },
    { question: 'Transfer quickly from computer to computer', answer: 'virus, Downloading' },
    { question: 'Democratic government', answer: 'people vote' },
    { question: 'What do you get when you buy something', answer: 'receipt' },
    { question: 'Agriculture based country', answer: 'farming economy' },
    { question: 'Stars or planet', answer: 'astronomy' },
    { question: 'Dead remains of plants', answer: 'fossils' },
    { question: 'Business and advertising PR means', answer: 'public relation' },
    { question: 'What do you need to see thing which is far away', answer: 'Binoculars' },
    { question: 'Magnify minimal objects', answer: 'microscope' },
    { question: 'Who to visit if you have fear of crowd', answer: 'psychologist' },
    { question: 'Means of traveling in developed countries', answer: 'public transport' },
    { question: 'Washing clothes', answer: 'laundry' },
    { question: 'Who is more playing football', answer: 'men' },
    { question: 'Living things', answer: 'Biology' },
    { question: 'Month between September and November', answer: 'October' },
    { question: 'Thing most people use in their home', answer: 'Bed' },
    { question: 'Main difference between a wrist watch and a clock', answer: 'Size' },
    { question: 'Where we store meat', answer: 'Freezer' },
    { question: 'Most important document while driving', answer: 'Driving license' },
    { question: 'Where we can buy floor', answer: 'Supermarket' },
    { question: 'For X-ray', answer: 'radiology' },
    { question: 'Volume of water', answer: 'liters' },
    { question: 'Hand joint with arm', answer: 'wrist' },
    { question: 'Wall clock and hand watch', answer: 'their relative sizes' },
    { question: 'City', answer: 'Urban area' }];
  }

  ngOnInit() {
  }

}
