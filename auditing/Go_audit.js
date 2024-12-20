How to Use
	1.	Navigate to the Auditing Directory
cd auditing
	2.	Run the Audit Script
node audit.js ./path-to-your-contract.sol
Example:
node audit.js ../contracts/MySolanaContract.sol

The script will output any deprecated functions found in your smart contract or confirm that no deprecated functions are present.

2. Node Monitoring

Monitor your Solana node’s performance and security using the monitoring scripts.

Monitor Script

# monitoring/monitor.py
import subprocess
import time
import sys

def check_solana_status():
    try:
        result = subprocess.run(['solana', 'block-height'], capture_output=True, text=True, timeout=10)
        if result.returncode != 0:
            print("Error fetching block height:", result.stderr)
            return False
        block_height = int(result.stdout.strip())
        print(f"Current Block Height: {block_height}")
        return True
    except subprocess.TimeoutExpired:
        print("Timeout expired while checking Solana status.")
        return False
    except Exception as e:
        print("An error occurred:", str(e))
        return False

def main():
    while True:
        status = check_solana_status()
        if not status:
            print("⚠️ Solana node may be down or experiencing issues.")
        else:
            print("✅ Solana node is healthy.")
        time.sleep(60)  # Check every minute

if __name__ == "__main__":
    main()

