import { Injectable } from '@angular/core';
import { Question } from './question.model';

@Injectable({ providedIn: 'root' })
export class QuestionsService {
  #questions: Question[] = [
    {
      title:
        'Który środek techniczny jest przeznaczony do zamocowania gąbki florystycznej w płaskim pojemniku?',
      answers: [
        { answer: 'Kenzan', isCorrect: false },
        { answer: 'Pinholder', isCorrect: true },
        { answer: 'Candleholder', isCorrect: false },
        { answer: 'Siatka miedziana', isCorrect: false }
      ],
      image: null,
      id: 1,
      questionName: 'question1'
    },
    {
      title: 'Przedstawiona na rysunku roślina to...',
      answers: [
        { answer: 'Lilium', isCorrect: false },
        { answer: 'Hippeastrum', isCorrect: false },
        { answer: 'Alstroemeria', isCorrect: true },
        { answer: 'Ornithogalum', isCorrect: false }
      ],
      image: 'q2.png',
      id: 2,
      questionName: 'question2'
    },
    {
      title: 'Które rodzaje wyrobów florystycznych wykonywane są jako dekoracje pogrzebowe?',
      answers: [
        { answer: 'Pnącze i wianek.', isCorrect: false },
        { answer: 'Naręcze i wodospad.', isCorrect: false },
        { answer: 'Korsarz i wiązanka angielska.', isCorrect: false },
        { answer: 'Poduszka i wieniec warszawski.', isCorrect: true }
      ],
      image: null,
      id: 3,
      questionName: 'question3'
    },
    {
      title: 'Bukiet spiralny charakteryzuje...',
      answers: [
        { answer: 'promienisty układ łodyg i wiązanie pojedyncze.', isCorrect: true },
        { answer: 'równoległy układ łodyg i wiązanie pojedyncze.', isCorrect: false },
        { answer: 'promienisty układ łodyg i wiązanie podwójne.', isCorrect: false },
        { answer: 'równoległy układ łodyg i wiązanie podwójne.', isCorrect: false }
      ],
      image: null,
      id: 4,
      questionName: 'question4'
    },
    {
      title: 'Na którym rysunku przedstawiono liść fatsji japońskiej?',
      answers: [
        { answer: 'Rysunek 1', isCorrect: false },
        { answer: 'Rysunek 2', isCorrect: false },
        { answer: 'Rysunek 3', isCorrect: false },
        { answer: 'Rysunek 4', isCorrect: true }
      ],
      image: 'q5.png',
      id: 5,
      questionName: 'question5'
    },
    {
      title: 'Który zestaw roślin należy wybrać do kompozycji florystycznej w stylu wegetatywnym?',
      answers: [
        { answer: 'Anturia, maki, floksy.', isCorrect: false },
        { answer: 'Gerbery, róże, stokrotki.', isCorrect: false },
        { answer: 'Lewkonie, róże, strelicje.', isCorrect: false },
        { answer: 'Rudbekie, nawłocie, floksy.', isCorrect: true }
      ],
      image: null,
      id: 6,
      questionName: 'question6'
    },
    {
      title:
        'Na rysunku przedstawiono kompozycję wykonaną zgodnie z zasadą złotego podziału. Ile wynosi jej wysokość (c), jeśli a = 30 cm?',
      answers: [
        { answer: '50cm', isCorrect: false },
        { answer: '60cm', isCorrect: false },
        { answer: '80cm', isCorrect: true },
        { answer: '110cm', isCorrect: false }
      ],
      image: 'q7.png',
      id: 7,
      questionName: 'question7'
    },
    {
      title: 'Przenawożenie azotem w trakcie uprawy skutkuje...',
      answers: [
        { answer: 'chlorozą międzyżyłkową na starszych liściach.', isCorrect: false },
        {
          answer: 'zahamowaniem wzrostu rośliny i jasnozielonym zabarwieniem liści.',
          isCorrect: false
        },
        {
          answer: 'zasychaniem brzegów liści i obniżeniem odporności na niekorzystne warunki.',
          isCorrect: false
        },
        {
          answer:
            'wybujałym wzrostem rośliny, opóźnieniem kwitnienia i skróceniem trwałości pozbiorczej.',
          isCorrect: true
        }
      ],
      image: null,
      id: 8,
      questionName: 'question8'
    },
    {
      title: 'W kompozycji o kolorach komplementarnych, kwiaty żółte należy połączyć...',
      answers: [
        { answer: 'z czerwonymi w stosunku ¼ do ¾.', isCorrect: false },
        { answer: 'z fioletowymi w stosunku ¼ do ¾.', isCorrect: true },
        { answer: 'z czerwonymi w stosunku ½ do ½.', isCorrect: false },
        { answer: 'z fioletowymi w stosunku ½ do ½.', isCorrect: false }
      ],
      image: null,
      id: 9,
      questionName: 'question9'
    },
    {
      title:
        'Do wykonania przedstawionego na rysunku bukietu ślubnego typu kamelia, florysta powinien wybrać...',
      answers: [
        { answer: 'kwiaty storczyka.', isCorrect: false },
        { answer: 'płatki bławatka.', isCorrect: false },
        { answer: 'pędy kamelii.', isCorrect: false },
        { answer: 'płatki róży.', isCorrect: true }
      ],
      image: 'q10.png',
      id: 10,
      questionName: 'question10'
    },
    {
      title:
        'Jakie wymiary na rzucie z góry wykonanym w skali 1:10 ma stoisko targowe, którego długość rzeczywista wynosi 4 m, a szerokość 2 m?',
      answers: [
        { answer: '2 cm x 1 cm', isCorrect: false },
        { answer: '4 cm x 2 cm', isCorrect: false },
        { answer: '20 cm x 10 cm', isCorrect: false },
        { answer: '40 cm x 20 cm', isCorrect: true }
      ],
      image: null,
      id: 11,
      questionName: 'question11'
    },
    {
      title:
        'Który zestaw środków technicznych nadaje się do wykonania wieńca rzymskiego ze stroiszu?',
      answers: [
        { answer: 'Wianek ze słomy i drut na kołku.', isCorrect: true },
        { answer: 'Wianek z wikliny i haftki rzymskie.', isCorrect: false },
        { answer: 'Ring ze styropianu i plastelina florystyczna.', isCorrect: false },
        { answer: 'Ring z gąbki do żywych roślin i drut wyrobowy.', isCorrect: false }
      ],
      image: null,
      id: 12,
      questionName: 'question12'
    },
    {
      title:
        'Na rysunku przedstawiono wieniec, którym w starożytności nagradzano zwycięzców igrzysk. Do jego wykonania zastosowano...',
      answers: [
        { answer: 'rozmaryn.', isCorrect: false },
        { answer: 'oliwkę.', isCorrect: false },
        { answer: 'mirt.', isCorrect: false },
        { answer: 'laur.', isCorrect: true }
      ],
      image: 'q13.png',
      id: 13,
      questionName: 'question13'
    },
    {
      title:
        'Który zestaw roślin najlepiej wybrać do wykonania dekoracji florystycznej w okresie Bożego Narodzenia?',
      answers: [
        { answer: 'Róża, lewkonia, mak.', isCorrect: false },
        { answer: 'Świerk, wilczomlecz, jemioła.', isCorrect: true },
        { answer: 'Chryzantema, nefrolepis, świerk.', isCorrect: false },
        { answer: 'Pierwiosnek, przebiśnieg, jemioła.', isCorrect: false }
      ],
      image: null,
      id: 14,
      questionName: 'question14'
    },
    {
      title: '	Do wykonania bukietu w formie odwróconej kropli nie nadaje się...',
      answers: [
        { answer: 'Rhipsalis.', isCorrect: false },
        { answer: 'Soleirolia.', isCorrect: true },
        { answer: 'Ceropegia.', isCorrect: false },
        { answer: 'Asparagus.', isCorrect: false }
      ],
      image: null,
      id: 15,
      questionName: 'question15'
    }
  ];

  get questions() {
    return this.#questions;
  }
}
