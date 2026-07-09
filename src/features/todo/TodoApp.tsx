
import { useRef } from "react";
import TodoForm from "./TodoForm.tsx";

const TodoApp = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
            <div className="max-w-sm mx-auto pb-12">
                <h1 className="text-center text-2xl py-8">
                    To-Do List
                </h1>

                <TodoForm inputRef ={inputRef}  />
            </div>
        </>
    );
};

export default TodoApp;