# The Alchemy of Giving

## Setup Instructions

### Prerequisites

- Node.js
- PostgreSQL
- npm or yarn

### Database Setup

1. Install PostgreSQL if not already installed
2. Open terminal and navigate to project directory:

```powershell
cd E:\Aag\SYP\TheAlchemyofGiving
```

3. Run the database script:

```powershell
psql -U postgres -f Backend\database.sql
```

When prompted, enter your PostgreSQL password that you set during installation.

### Environment Setup

1. Create a `.env` file in the Backend folder: tara backend folder ma already .env cha tesma timro postgres ko password matra rakhda huncha.

```env
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=alchemy_giving
```

### Backend Setup

1. Navigate to Backend folder:

```bash
cd Backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm run dev
```

### Frontend Setup

1. Navigate to Frontend folder _new terminal ma_!!:

```bash
cd Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application should now be running at:

- Frontend: http://localhost:5173
- Backend: http://localhost:5000
