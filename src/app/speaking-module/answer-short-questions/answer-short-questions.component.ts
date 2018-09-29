import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer-short-questions',
  templateUrl: './answer-short-questions.component.html',
  styleUrls: ['./answer-short-questions.component.css']
})
export class AnswerShortQuestionsComponent implements OnInit {
  private answers: any;
  private questions: any;
  constructor() {
    this.questions = [{question: 'Who do you call in case of leaking pipeline', answer: 'plumber'},
    {question: 'Microscope is used to see', answer: 'Micro-organism'},
    {question: 'Transfer quickly from computer to computer', answer: 'virus, Downloading'},
    {question: 'Democratic government', answer: 'people vote'},
    {question: 'What do you get when you buy something', answer: 'receipt'},
    {question: 'Agriculture based country', answer: 'farming economy'},
    {question: 'Stars or planet', answer: 'astronomy'},
    {question: 'Dead remains of plants', answer: 'fossils'},
    {question: 'Business and advertising PR means', answer: 'public relation'},
    {question: 'What do you need to see thing which is far away', answer: 'Binoculars'},
    {question: 'Magnify minimal objects', answer: 'microscope'},
    {question: 'Who to visit if you have fear of crowd', answer: 'psychologist'},
    {question: 'Means of traveling in developed countries', answer: 'public transport'},
    {question: 'Washing clothes', answer: 'laundry'},
    {question: 'Who is more playing football', answer: 'men'},
    {question: 'Living things', answer: 'Biology'},
    {question: 'Month between September and November', answer: 'October'},
    {question: 'Thing most people use in their home', answer: 'Bed'},
    {question: 'Main difference between a wrist watch and a clock', answer: 'Size'},
    {question: 'Where we store meat', answer: 'Freezer'},
    {question: 'Most important document while driving', answer: 'Driving license'},
    {question: 'Where we can buy floor', answer: 'Supermarket'},
    {question: 'For X-ray', answer: 'radiology'},
    {question: 'Volume of water', answer: 'liters'},
    {question: 'Hand joint with arm', answer: 'wrist'},
    {question: 'Wall clock and hand watch', answer: 'their relative sizes'},
    {question: 'City', answer: 'Urban area'}];
    this.answers = [
      {
        question: 'What organ do cardiologists specialize in?',
        correct: '(the) heart / hearts',
        incorrect: '(the) body / medicine / lungs / liver / stomach / skin / kidneys'
      },
      {
        question: 'If telescopes are used to locate distant objects, what instrument is employed to magnify miniscule objects?',
        correct: '(electron) microscope / microscopes',
        incorrect: 'telescopes / binoculars'
      },
      {
        question: 'Which kind of punishment for a crime is the less severe, an imprisonment or community service?',
        correct: 'community service',
        incorrect: 'imprisonment'
      },
      {
        question: 'How many sides are there in a bilateral agreement?',
        correct: 'two',
        incorrect: 'any other number'
      },
      {
        question: 'Which is the longest: a decade, a millennium or a century?',
        correct: 'a millennium',
        incorrect: 'a decade / a century'
      },
      {
        question: 'A manufacturing process releases noxious gases. What is the most important safety' +
        'measure for workers at this plant - ensuring good ventilation, or appropriate footwear?',
        correct: '(ensuring good) ventilation',
        incorrect: 'appropriate footwear / noxious gases / threats to health / safetyy'
      },
      {
        question: 'A list of events placed in time order is usually described as what?',
        correct: 'a chronology / a timeline',
        incorrect: 'history / schedule / order / time / story / book/ news'
      },
      {
        question: 'If a figure is hexagonal, how many sides does it have?',
        correct: 'six',
        incorrect: 'one / two / three / four / five / seven / eight / (any other number) / square / rectangle'
      },
      {
        question: 'What key mineral makes sea water different from fresh water?',
        correct: 'salt',
        incorrect: 'seaweed / fish / oceans / rivers'
      },
      {
        question: 'In the animal kingdom, is the purpose of camouflage to attract a mate, to find food or to hide?',
        correct: '(it\'s) (the purpose is) (to) hide',
        incorrect: 'to a attract mate / to find food'
      }];
    }

  ngOnInit() {
  }

}
