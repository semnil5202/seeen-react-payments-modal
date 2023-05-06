# seeen-react-payments-modal

TypeScript를 지원하는 BottomSheet 모달 라이브러리입니다.

## 설치 방법

```
npm install seeen-react-payments-modal
yarn add seeen-react-payments-modal
```

## 사용 방법

```
import Modal from 'seeen-react-payments-modal';
```

```jsx
<Modal isModalOpen={/* boolean 타입의 모달 오픈 여부 값 */} closeModal={/* ()=>void 타입의 모달 닫기 메서드 */}>
  { /* children */ }
</Modal>
```

## Props

### children

- React Node 타입의 필수 값입니다.
- 모달 내부에 들어갈 JSX 입니다.

### isModalOpen

- boolean 타입의 필수 값입니다.
- 모달을 띄울지 말지를 결정하는 값입니다.

### closeModal

- ()=>void 타입의 필수 값입니다.
- 모달을 닫는 역할의 함수이며 isModalOpen을 false로 변경하는 로직이 있어야 정상동작합니다.

## 사용 예시

```jsx
import Modal from 'seeen-react-payments-modal';

const [isModalOpen, setIsModalOpen] = useState(true);

const handleCloseModal () => {
  setIsModalOpen(false);
}

return (
  <Modal isModalOpen={isModalOpen} closeModal={handleCloseModal}>
    <h2>이 곳에 내용을 작성하세요.</h2>
  </Modal>
);
```
