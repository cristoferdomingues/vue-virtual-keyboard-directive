import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom';
import directive from '../lib-directives/jt-vk';

describe('Component with jt-vk directive', () => {
  beforeEach(() => {
    window.document.dispatchEvent(
      new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true,
      })
    );
  });

  test('test keyboard showing and hidding', async () => {
    const { getByLabelText, getByTestId } = render(
      {
        template: `
        <div>
          <label for="name">Name</label>
          <input id="name" type="text" v-jt-vk />
        </div>
        <div data-testid="outdiv"></div>
      `,
      },
      {
        global: {
          directives: { jtVk: directive },
        },
      }
    );
    const input = getByLabelText(/Name/i);
    const keyboard = getByTestId('simple-keyboard');
    const outDiv = getByTestId('outdiv');

    expect(keyboard).toBeInTheDocument();
    await fireEvent.focus(input);
    expect(keyboard).toHaveClass('show');
    await fireEvent.click(outDiv);
    expect(keyboard).toHaveClass('hide');
  });

  test('Test Numeric Keyboard rendering', async () => {
    const { getByLabelText, getByTestId } = render(
      {
        template: `
        <div>
          <label for="name">Name</label>
          <input id="name" type="text" v-jt-vk />
        </div>
        <div>
          <label for="phone">Phone</label>
          <input id="phone" type="text" v-jt-vk:numeric />
        </div>
      `,
      },
      {
        global: {
          directives: { jtVk: directive },
        },
      }
    );

    const numericInput = getByLabelText(/Phone/i);
    const notNumericInput = getByLabelText(/Name/i);
    const keyboard = getByTestId('simple-keyboard');
    await fireEvent.focus(numericInput);
    expect(keyboard).toHaveClass('numeric-theme');
    await fireEvent.focus(notNumericInput);
    expect(keyboard).not.toHaveClass('numeric-theme');
  });

 /*  test('Test Candidate Box Rendering', async () => {
    const { getByLabelText, getByText, debug } = render(
      {
        template: `
        <div>
          <label for="name">Name</label>
          <input id="name" type="text" v-model="name" v-jt-vk:pt />
        </div>
      `,
        data: () => {
          return {
            name: '',
          };
        },
      },
      {
        global: {
          directives: { jtVk: directive },
        },
      }
    );
    const input = getByLabelText(/Name/i);
    await fireEvent.focus(input);

    const eButton = document.querySelector(
      'button[data-skbtnuid="default-r1b3"]'
    );
    await fireEvent.click(eButton);
    const candidateBox = document.querySelector('.hg-candidate-box');
    expect(candidateBox).toBeInTheDocument();
  }); */
});
