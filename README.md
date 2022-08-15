# yreact

각각의 컴포넌트는 useState를 호출할 때마다 currentStateKey로 해당 컴포넌트의 배열 위치 값을 관리한다.

```
states = [
  [4500, setAmericano],
  [5000, setLatte],
  [5500, setMocha]
  ...
]
```

그래서 순서대로 저장되는건 알겠는데...
어떻게 key 값이 해당 컴포넌트인지 알지..? 클로저 개념 대입해서 currentStateKey가 죽지않는 변수라고 치는데...
마지막 렌더링 단계에서 currentStateKey가 0으로 초기화되고 어케 찾아가는거지... 내부 구조가 어떻게 되어있는지를 모르겠네...