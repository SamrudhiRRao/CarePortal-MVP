# 💜 CarePortal MVP

A smart matching portal that helps patients and their families find suitable care facilities based on name, zip code, and care type. Built as part of the CareMates coding challenge.

---

## 🚀 Features

- ✅ Multi-step form for patient input
- ✅ Smart matching algorithm based on care type and zip code proximity
- ✅ User-friendly validations
- ✅ Styled in CareMates' purple branding
- ✅ Fully responsive design
- ✅ Deployed on Vercel for public access

---

## 🧠 Matching Logic

- If care type is **day care**, skip zip code and show a “no match” message.
- For **stationary** or **ambulatory** care:
  - Match the **nearest available** facility that serves the patient's zip.
  - If the nearest facility is **full**, try the next nearest.
  - If no suitable match is found within **3000 zip code distance**, show a “no match” message.

---

## 🛠️ Tech Stack

- ⚛️ React.js
- 🎨 Custom CSS (no Tailwind)
- 🌐 Deployed on Vercel

---

## 📝 How to Run Locally

```bash
git clone https://github.com/SamrudhiRRao/CarePortal-MVP.git
cd CarePortal-MVP
npm install
npm start
```

---

## 🌍 Live Demo

🔗 [https://care-portal-mvp-s3mi.vercel.app/](https://care-portal-mvp-s3mi.vercel.app/)

---

## 📂 Folder Structure

```
CarePortal-MVP/
│
├── public/                # Static files
├── src/
│   ├── components/        # Step1, Step2, Step3, Result
│   ├── App.jsx
│   └── index.js
├── styles.css             # Custom styling
├── package.json
└── README.md              # You're reading it!
```

---

## 🙋‍♀️ Author

Made with 💜 by **Samrudhi R. Rao**

---

## 📬 Contact

If you have any questions or feedback, feel free to reach out!

---
