import React, { useContext, useEffect,  useState } from "react";
import "../../../index.css";
import io from "socket.io-client";
import axios from "axios";
import { AuthContext } from "../../../providers/AuthProvider";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";

const socket = io("http://localhost:5000", {
  transports: ["websocket"],
});

const LiveChats = () => {
  
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [publisherMessages, setPublisherMessages] = useState([]);
  const [seekerMessages, setSeekerMessages] = useState([]);
  const [text, setText] = useState("");

  const {
    isPending,
    error,
    data: applierInfo = {},
  } = useQuery({
    queryKey: ["live-chats", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/live-chats/${id}`
      );
      return data;
    },
  });

  // user info petiching
  
  const { data: userInfo = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:5000/users?email=${user?.email}`
      );
      return data;
    },
  });

// applier and message sender variable

const messageSender = user?.email;
const jobApplierEmail = applierInfo?.email;

// message api using tanstak query

const { data: allMessages = [] } = useQuery({
  queryKey: ["messages", jobApplierEmail],
  queryFn: async () => {
    const { data } = await axios.get(
      `http://localhost:5000/messages?applierEmail=${jobApplierEmail}`
    );
    return data;
  },
});

// message distribution

useEffect(() => {
  const publisher = allMessages.filter((msg) => msg.sender === "publisher");
  const seeker = allMessages.filter((msg) => msg.sender === "seeker");

  setPublisherMessages(publisher);
  setSeekerMessages(seeker);
}, [allMessages]);

  // socket io implentation

  useEffect(() => {
    if (jobApplierEmail && messageSender) {
      const handleMessage = (message) => {
        // console.log(message);
        if (message.sender == "publisher")
          setPublisherMessages((prev) => [...prev, message]);
        if (message.sender == "seeker")
          setSeekerMessages((prev) => [...prev, message]);
      };

      // Attach listeners
      socket.on(jobApplierEmail, handleMessage);
      // socket.on(messageSender, handleMessage);

      // Clean up old listeners
      return () => {
        socket.off(jobApplierEmail, handleMessage);
        // socket.off(messageSender, handleMessage);
      };
    }
  }, [jobApplierEmail,messageSender]);

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const sendMessage = () => {
    if (text.trim()) {
      if (userInfo[0]?.role == "publisher") {
        socket.emit("sendMessages", {
          jobApplierEmail,
          messageSender,
          sender: "publisher",
          text,
        });
        setText("");
      }
      if (userInfo[0]?.role == "seeker") {
        socket.emit("sendMessages", {
          jobApplierEmail,
          messageSender,
          sender: "seeker",
          text,
        });
        setText("");
      }
      // socket.emit("sendMessages", {jobApplierEmail,text});
    }
  };
  // console.log(publisherMessages, seekerMessages);
  return (
    
    <div className="flex">
      <div className="p-2 w-[96%] mx-auto lg:w-[70%] lg:p-4">
        <h1 className="text-xl font-bold mb-4">Live Chat</h1>
        <div className="w-[100%] border p-2 h-80 overflow-y-auto mb-4 bg-gray-100 rounded">
          <div>
            {publisherMessages.map((msg, index)=>(<div key={index} className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full bg-gray-300 flex justify-center item-center ">
                  <h1 className="text-center pt-2 ">P</h1>
                </div>
              </div>
              <div className="chat-header">
                <time className="text-xs opacity-50">{msg?.createdAt}</time>
              </div>
              <div className="chat-bubble">{msg?.text} </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>))}
            {seekerMessages.map((msg,index)=>(<div key={index} className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full bg-gray-300 flex justify-center item-center">
                <h1 className="text-center pt-2 ">S</h1>
                </div>
              </div>
              <div className="chat-header">
                <time className="text-xs opacity-50">{msg?.createdAt}</time>
              </div>
              <div className="chat-bubble">{msg?.text} </div>
              {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
            </div>))}
          </div>
        </div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 w-full mb-2 rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
        Send
        </button>
      </div>
    </div>
  );
};

export default LiveChats;
