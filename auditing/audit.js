# Usage

## 1. Smart Contract Auditing

Use the provided scripts to audit your Solana smart contracts for common vulnerabilities.

### Audit Script

```javascript
// auditing/audit.js
const fs = require('fs');
const path = require('path');

// List of deprecated functions to check
const deprecatedFunctions = ['oldFunction1', 'oldFunction2'];

function auditContract(contractPath) {
    if (!fs.existsSync(contractPath)) {
        console.error('Contract file does not exist:', contractPath);
        process.exit(1);
    }

    const contractCode = fs.readFileSync(contractPath, 'utf-8');
    const issues = deprecatedFunctions.filter(func => contractCode.includes(func));

    if (issues.length > 0) {
        console.log('⚠️ Deprecated functions found:');
        issues.forEach(func => console.log(`- ${func}`));
    } else {
        console.log('✅ No deprecated functions found.');
    }
}

// Command-line interface
const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('Usage: node audit.js <path-to-contract>');
    process.exit(1);
}

const contractPath = path.resolve(args[0]);
auditContract(contractPath);
