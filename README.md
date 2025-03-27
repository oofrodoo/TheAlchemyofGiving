# The Alchemy of Giving

## Setup Instructions

### 1. Clone Repository

```powershell
git clone <repository-url>
cd TheAlchemyofGiving
```

### 2. Install Dependencies

```powershell
# Backend dependencies
cd Backend
npm install

# Frontend dependencies
cd ../Frontend
npm install
```

### 3. Database Setup

1. Install PostgreSQL
2. Create database and tables:

```powershell
# Navigate to project root
cd E:\Aag\SYP\TheAlchemyofGiving

# Run database setup script
psql -U postgres -f Backend\database.sql
```

### 4. Environment Setup

Create `.env` file in Backend folder (Don't need to do cause its already there):

```env
DB_USER=postgres
DB_PASSWORD=your_postgres_password  (Just update this to your postgres password)
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=alchemy_giving
```

### 5. Start Application

```powershell
# Terminal 1 - Start Backend
cd Backend
npm run dev

# Terminal 2 - Start Frontend
cd Frontend
npm run dev
```

### Admin Login

- Email: abcdahal@admin.com
- Password: abcdahal

### Note

- The `database.sql` file contains all necessary table structures
- No backup restoration needed - tables are created fresh
- Admin user is created automatically via the setup script
