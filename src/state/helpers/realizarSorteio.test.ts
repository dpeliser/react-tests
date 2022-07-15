import { realizarSorteio } from './realizarSorteio';

describe('dado um sorteio de amigo secrete', () => {

  test('cada participante não sorteie o próprio nome', () => {
    const participantes = ['Diego', 'Douglas', 'Cleunir', 'Inês'];
    const sorteio = realizarSorteio(participantes);

    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante);

      expect(amigoSecreto).not.toEqual(participante);
    })
  });

});