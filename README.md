# "From Recipe to Resource" - Website Guide & Instructions

Welcome! This website is designed to be a premium, responsive academic portfolio that links culinary arts with systems and environmental engineering.

이 웹사이트는 요리 예술(Culinary Arts)과 시스템/환경 공학(Systems Engineering)의 연결을 보여주기 위해 제작된 고품질 포트폴리오 웹사이트입니다.

---

## 📁 Project Structure (프로젝트 구조)

```
PassionProject_website01/
├── index.html          # Main web page structure (웹페이지 골격 구조)
├── style.css           # Custom styles & dark-mode-first aesthetic (스타일 및 다크 모드 디자인)
├── app.js              # Routing, modal controls, and dynamic rendering logic (화면 제어 로직)
├── data.js             # ONLY EDIT THIS to update text/images (★ 텍스트/이미지 변경 시 여기만 수정하세요)
├── README.md           # This instruction guide (이 안내 파일)
└── images/             # Place your actual food photos here (실제 요리 사진을 넣는 폴더)
    ├── sourdough.jpg
    ├── salmon.jpg
    ├── noodles.jpg
    ├── porkbelly.jpg
    ├── tomato.jpg
    └── consomme.jpg
```

---

## ✍️ How to Update Text Content (텍스트 내용을 업데이트하는 방법)

You do **not** need to touch any HTML or CSS code to change the text. All text content is stored in **[data.js](file:///Users/dohyoonnoh/Desktop/PassionProject_website01/data.js)**. 

텍스트 내용을 바꾸기 위해 HTML이나 CSS 코드를 직접 수정하실 필요가 없습니다. 모든 텍스트는 **[data.js](file:///Users/dohyoonnoh/Desktop/PassionProject_website01/data.js)** 파일에 저장되어 관리됩니다.

### Step-by-Step (방법):
1. Open **[data.js](file:///Users/dohyoonnoh/Desktop/PassionProject_website01/data.js)** in your text editor (VS Code, Cursor, Notepad, etc.).
   텍스트 에디터(VS Code, Cursor, 메모장 등)로 `data.js` 파일을 엽니다.
2. Locate the text you want to edit. For example, to change the student name or contact email, edit the `branding` block:
   수정하고 싶은 부분을 찾습니다. 예를 들어, 학생 이름이나 이메일을 바꾸고 싶다면 `branding` 객체 내부를 수정하세요:
   ```javascript
   branding: {
     title: "From Recipe to Resource",
     subtitle: "Intersecting Culinary Arts & Systems Engineering",
     studentName: "Your New Name Here", // <-- Edit this!
     contactEmail: "your.email@example.com", // <-- Edit this!
     ...
   }
   ```
3. Save the file. Refresh the website in your browser, and the changes will appear immediately!
   파일을 저장하고 브라우저를 새로고침하면 변경 사항이 즉시 반영됩니다.

---

## 📷 How to Update Photos (사진을 업데이트하는 방법)

We have provided high-quality placeholder images in the `images/` directory. When you want to replace them with your actual creations:

현재 `images/` 폴더에는 AI로 생성된 고품질의 플레이스홀더 요리 사진들이 들어있습니다. 직접 만든 요리 사진으로 교체하고 싶으실 때는 다음 방법을 따르세요:

### Method 1: direct overwrite (이름 그대로 덮어쓰기 - 가장 추천)
1. Prepare your photo and convert it to **JPG** format.
   직접 만든 요리 사진을 준비하고 **JPG** 포맷으로 저장합니다.
2. Crop/resize it (recommended aspect ratio **3:2** or **4:3** for clean fits).
   사진 비율을 **3:2** 또는 **4:3** 정도로 자릅니다. (카드 레이아웃에 예쁘게 맞습니다)
3. Rename your photo to match the exact placeholder name (e.g., `salmon.jpg` or `sourdough.jpg`).
   사진 이름을 기존 플레이스홀더 이름(예: `salmon.jpg`, `sourdough.jpg` 등)과 완전히 똑같이 바꿉니다.
4. Copy it into the `images/` folder, overwriting the old file.
   `images/` 폴더 안에 복사하여 기존 파일을 덮어씁니다.

### Method 2: Update image path in `data.js` (data.js에서 파일 이름 매핑 수정하기)
1. Put your new photo in the `images/` folder (e.g., `images/my_homemade_bread.jpg`).
   새로운 사진 파일을 `images/` 폴더에 넣습니다 (예: `images/my_homemade_bread.jpg`).
2. Open **[data.js](file:///Users/dohyoonnoh/Desktop/PassionProject_website01/data.js)** and find the dish's image field:
   `data.js` 파일을 열고 해당 요리의 `image` 필드를 수정합니다:
   ```javascript
   portfolio: [
     {
       id: "sourdough",
       name: "Artisanal Hydration Sourdough",
       category: "Baking & Fermentation",
       image: "images/my_homemade_bread.jpg", // <-- Update filename here!
       ...
     }
   ]
   ```
3. Save the file and refresh your browser.
   파일을 저장하고 브라우저를 새로고침합니다.

---

## 🚀 How to Run the Website Locally (로컬에서 실행하는 방법)

To view the website on your computer:
1. Double-click on **[index.html](file:///Users/dohyoonnoh/Desktop/PassionProject_website01/index.html)**. It will open in your default web browser.
   `index.html` 파일을 더블클릭하면 웹 브라우저에서 바로 열립니다.
2. Alternatively, if using **VS Code**, right-click `index.html` and select **"Open with Live Server"** to enable real-time reloading.
   VS Code를 사용 중이시라면 `Live Server` 확장을 통해 실시간 새로고침 기능과 함께 편리하게 확인할 수 있습니다.
