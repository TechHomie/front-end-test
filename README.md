# Next.js 14 Product Table Project

This project is a Next.js 14 application with a `ProductTable` component that displays product data in a table format. It is integrated with Jest for testing.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 18 or higher)
- npm (version 7 or higher)

### Installation

1. **Clone the Repository**

```bash
    git clone https://github.com/TechHomie/front-end-test.git
    cd front-end-test
```

2. **Install Dependencies**

   Run the following command to install all the required dependencies:

```bash
    npm install
```

3. **Copy Environment Variables**

   Copy the contents of the `.env.example` file into a new `.env.local` file:

```bash
    cp .env.example .env.local
```

   Modify the environment variables in `.env.local` as needed.

### Running the Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

### Build the Project

To create a production build:

```bash
npm run build
```

After the build completes, you can start the production server:

```bash
npm start
```

### Running in Production (PM2)

To run the build with pm2 install pm2 in your machine, then:

```bash
pm2 start npm --name "nextjs-app" -- start

pm2 save
```


## Running Tests

This project is set up with Jest for unit testing the components. To run the tests:

1. **Run Jest Tests**

   Run the following command to execute all the test cases:

```bash
npm test
```

2. **Watch Mode (Optional)**

   To run the tests in watch mode:

```bash
npm run test:watch
```
3. Currently there is a Single E2E test written for ProductTable rendition,  The Test take mocks values and check across expected results

    \<rootDir\>/\_\_tests__/ProductTable.test.tsx


### Important Notes

- Ensure the environment variables are set up correctly before running tests or starting the server.

## Folder Structure

```bash
front-end-test/
│
├── pages/
│   ├── _app.tsx
│   ├── index.tsx
│   ├── login.tsx
│   └── products.tsx
│
├── components/
│   ├── Layout/
│   │   └── index.tsx
│   ├── ProductTable/
│   │   ├── index.tsx
│   │   └── ProductTableStyles.ts
│   ├── ReviewModal/
│   │   └── index.tsx
│   └── withAuth.tsx
│
├── lib/
│   ├── api.ts
│   ├── auth.ts
│   └── products.ts
│
├── styles/
│   ├── globals.css
│   └── theme.ts
│
├── types/
│   └── index.ts
│
├── utils/
│   └── index.ts
│
├── tests/
│   ├── components/
│   │   └── ProductTable.test.tsx
│   └── pages/
│
├── public/
│   └── (static files like images, favicon, etc.)
│
├── .gitignore
├── jest.config.mjs
├── jest.setup.mjs
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## License

This is a test projec and doesn't require a license.
