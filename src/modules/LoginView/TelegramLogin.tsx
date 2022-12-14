import React, {useEffect, useRef} from 'react';
import {useDispatch} from "react-redux";

import {login} from "@/store/userSlice";

export interface TelegramUser {
  auth_date: number;
  id: number;
  username: string;
  first_name: string;
  hash: string;
}

function TelegramLogin() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleTelegramResponse = (user: TelegramUser) => {
    dispatch(login(user))
  };

  useEffect(() => {
    (window as any).telegramLoginWidgetCb = handleTelegramResponse;

    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?21';
    script.async = true;

    const attributes = {
      'data-telegram-login': "climb_logger_bot",
      'data-size': 'large',
      'data-request-access': 'write',
      'data-lang': 'en',
      'data-onauth': 'telegramLoginWidgetCb(user)',
    };

    for (const [k, v] of Object.entries(attributes)) {
      v !== undefined && script.setAttribute(k, `${v}`);
    }

    containerRef.current!.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      if ((window as any).telegramLoginWidgetCb) {
        delete (window as any).telegramLoginWidgetCb;
      }
    };
  });

  return <div ref={containerRef}/>;
}

export default TelegramLogin;