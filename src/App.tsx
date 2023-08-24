import * as S from './styles';

function App() {
  return (
    <S.Main>
      <S.Header>
        <img src="/logo.svg" alt="Logo" width={90} height={60} />
        <S.Score>
          <p>SCORE</p>
          <h1>12</h1>
        </S.Score>
      </S.Header>

      <S.Icons>
        <S.Icon>
          <img src="/icon-paper.svg" alt="Icon Paper" width={40} height={40} />
        </S.Icon>
        <S.Icon>
          <img
            src="/icon-scissors.svg"
            alt="Icon Scissors"
            width={40}
            height={40}
          />
        </S.Icon>
        <S.Icon>
          <img src="/icon-rock.svg" alt="Icon Rock" width={40} height={40} />
        </S.Icon>
      </S.Icons>

      <S.Button>Rules</S.Button>
    </S.Main>
  );
}

export default App;
