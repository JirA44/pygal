__name__ == "__main__":
    plt.show()  

---

import * as pandas from 'pandas';
import * as matplotlib.pyplot from 'matplotlib';

// Simulated historical data for BTC-USD (example)
const symbol = "BTC-USD";
const startTime = new Date("2019-03-01T00:00:00Z");
const endTime = new Date("2023-04-01T23:59:59Z");
const period = "144h"; // 7 days

// Read the historical data
const historique = pandas.read_csv(`data/${symbol}history.csv`);

// Extract OHLC values
const open_values = historique['open'].values;
const high_values = historique['high'].values;
const low_values = historique['low'].values;
const close_values = historique['close'].values;

// Create the histogram for OHLC values
fig = new fig();
fig.plot(open_values, color: 'blue', label: 'Open');
fig.plot(high_values, color: 'green', label: 'High');
fig.plot(low_values, color: 'red', label: 'Low');
fig.plot(close_values, color: 'purple', label: 'Close');
xlabel('Time (UTC)');
ylabel('Value');
title(`${symbol} OHLC Chart`);
legend();
show(); // Display the chart

// Example of using the chart