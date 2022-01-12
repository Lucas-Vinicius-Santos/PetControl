import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  esterEggCounter = 0;

  esterEgg() {
    if (this.esterEggCounter !== 0) return;

    this.esterEggCounter++;
    let urlImg = '../../../assets/cheems/cheems-burger.gif';

    const body = document.querySelector('.container');
    const esterEggTag = document.createElement('div');
    const esterEgg = document.createElement('img');

    esterEgg.setAttribute('src', urlImg);
    esterEggTag.classList.add('cheems');
    esterEggTag.appendChild(esterEgg);
    body?.appendChild(esterEggTag);

    setTimeout(() => {
      body?.removeChild(esterEggTag);
    }, 3500);
  }
}
