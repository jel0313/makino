import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { Todo } from './Todo.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Todo />
	</StrictMode>
);
