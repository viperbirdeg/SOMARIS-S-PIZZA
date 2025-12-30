import React, { useState, useEffect } from "react";
import "../styles/Assistant.css";
import pororo from "../../../imagenes/pororo.jpg"

const Assistant = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Mensaje de bienvenida
    useEffect(() => {
        if (open && messages.length === 0) {
            setMessages([
                { role: "assistant", content: "Hola 👋 ¿En qué puedo ayudarte?" }
            ]);
        }
    }, [open]);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userText = input;

        setMessages(prev => [
            ...prev,
            { role: "user", content: userText },
            { role: "assistant", content: "Procesando...", loading: true }
        ]);

        setInput("");
        setLoading(true);

        try {
            const res = await fetch("http://localhost:3001/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userText })
            });

            const data = await res.json();

            setMessages(prev => {

                const msgs = [...prev];
                msgs.pop();

                msgs.push({
                    role: "assistant",
                    content: data.reply
                });

                return msgs;
            });

        } catch (error) {
            setMessages(prev => {
                const msgs = [...prev];
                msgs.pop();
                msgs.push({
                    role: "assistant",
                    content: "❌ Error al conectar con el servidor."
                });
                return msgs;
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <button className="assistant-btn" onClick={() => setOpen(o => !o)}>
                <img src= {pororo} />
            </button>

            {open && (
                <div className="assistant-chat">
                    <div className="chat-messages">
                        {messages.map((m, i) => (
                            <div
                                key={i}
                                className={`message ${m.role === "user" ? "user" : "bot"} ${m.loading ? "loading" : ""}`}
                            >
                                {m.content}
                            </div>
                        ))}
                    </div>

                    <div className="chat-input">
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && sendMessage()}
                            placeholder="Escribe un mensaje..."
                            disabled={loading}
                        />
                        <button onClick={sendMessage} disabled={loading}>
                            {loading ? "..." : "Enviar"}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Assistant;
