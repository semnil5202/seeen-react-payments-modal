import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
const MyModal = () => {
    const [greeting, setGreeting] = useState('hello');
    return _jsx("div", { children: greeting });
};
export default MyModal;
