# The Alchemy of Giving

## First-Time Setup Guide

### Prerequisites

- Node.js v14 or higher
- PostgreSQL v12 or higher
- Git

### Step 1: Clone & Install

```powershell
# Clone repository
git clone <repository-url>
cd TheAlchemyofGiving

# Install dependencies
cd Frontend
npm install
cd ../Backend
npm install
```

### Step 2: Database Setup

#update .env ma timro postgres ko password

# Initialize database

psql -U postgres -f database.sql

# Create admin user

node scripts/createAdmin.js

````

### Step 3: Start Application

```powershell
# Terminal 1: Start Backend
cd Backend
npm run dev

# Terminal 2: Start Frontend
cd Frontend
npm run dev
````

### Default Admin Credentials

- Email: abcdahal@admin.com
- Password: abcdahal

### Troubleshooting

#### Database Connection Issues

```powershell
# Check if database exists
psql -U postgres -c "\l | findstr alchemy_giving"

# Verify tables
psql -U postgres alchemy_giving -c "\dt"

# If tables are missing, rerun setup
psql -U postgres -f Backend\database.sql
```

#### Port Already in Use

```powershell
# Find process using port 5001
netstat -ano | findstr :5001

# Kill the process (replace XXXX with PID)
taskkill /PID XXXX /F
```

### Verification Steps

1. Backend should show:
   - "✅ PostgreSQL connected successfully"
   - "🚀 Server running on port 5001"
2. Frontend should open at: http://localhost:5173
3. Admin login should work with default credentials
