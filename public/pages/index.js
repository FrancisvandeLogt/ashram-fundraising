### pages/index.js

```javascript
import React, { useState } from "react";
import translations from "../lib/translations";

export default function Home() {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-rose-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-end">
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="mb-4 border rounded p-2 text-sm">
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="pl">Polski</option>
            <option value="nl">Nederlands</option>
            <option value="zh">中文</option>
          </select>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-rose-800">{t.title}</h1>
        <p className="text-lg md:text-xl text-gray-700">{t.subtitle}</p>

        <div className="grid gap-6 md:grid-cols-2 text-left mt-8">
          <div className="bg-white p-6 shadow-xl rounded-xl">
            <h2 className="text-2xl font-semibold text-rose-700">{t.uniqueOffering}</h2>
            <p>{t.uniqueText1}</p>
            <p>{t.uniqueText2}</p>
          </div>

          <div className="bg-white p-6 shadow-xl rounded-xl">
            <h2 className="text-2xl font-semibold text-rose-700">{t.whyItMatters}</h2>
            <p>{t.whyText1}</p>
            <p>{t.whyText2}</p>
          </div>
        </div>

        <div className="bg-rose-100 rounded-2xl p-6 mt-10 space-y-4 shadow-md">
          <h2 className="text-2xl font-semibold text-rose-800">{t.visionTitle}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {t.visionItems.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
        </div>

        <div className="text-center mt-10 space-y-4">
          <p className="text-lg text-gray-800">{t.donationPrompt}</p>
          <form action="/api/stripe/create-checkout-session" method="POST">
            <select name="amount" className="mb-4 border rounded p-2 text-sm">
              <option value="2500">€25</option>
              <option value="5000">€50</option>
              <option value="10000">€100</option>
              <option value="50000">€500</option>
            </select>
            <button type="submit" className="bg-rose-700 text-white hover:bg-rose-800 px-6 py-3 text-lg rounded-2xl">
              {t.donateNow}
            </button>
          </form>
          <p className="text-sm text-gray-600">{t.majorDonors}</p>
        </div>

        <footer className="text-center text-sm text-gray-500 mt-12">
          <p>{t.footer1}</p>
          <p dangerouslySetInnerHTML={{ __html: t.footer2 }} />
          <p>{t.footer3}</p>
        </footer>
      </div>
    </div>
  );
}
```

---
