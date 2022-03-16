import { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b); // numbers라는 배열의 각 요소에 reducer 함수인 ( a + b )를 실행
  return sum / numbers.length;
};

const AverageuseMemo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null); // Ref 객체 만듬

  const onChange = useCallback(e => {
    setNumber(e.target.value); 
  }, [] ); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback (e => {
    const NextList = list.concat(parseInt(number)); // input으로 입력 받은 number의 값들을 정수로 반환 후 기존 배열인 list( [] )에 합침
    setList(NextList);
    setNumber("");
    inputEl.current.focus(); // Ref객체의 current : 우리가 선택하고자 하는 DOM을 가르킴, 그리고 포커싱 해주는 DOM API focus() 호출
  }, [number, list]); // number 혹은 list가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]); // useMemo(() => {실행할 함수}, 변화감지변수);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl}/> {/* 선택 하고 싶은 DOM(여기선 input)에 속성으로 ref값을 설정*/}
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => ( 
          <li key={index}>{value}</li> // 배열 list의 index를 통해 value 값 출력
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};
export default AverageuseMemo;
