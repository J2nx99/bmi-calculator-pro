import React, { useState, useEffect, useReducer } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import {
  Calculator,
  TrendingUp,
  Calendar,
  User,
  Scale,
  Ruler,
  History,
  Target,
  Award,
  AlertCircle,
  Shield,
  Zap,
  BarChart3,
} from "lucide-react";

// Custom hook for BMI calculations
const useBMICalculator = () => {
  const calculateBMI = (weight, height, isMetric) => {
    let weightKg = weight;
    let heightM = height;

    if (!isMetric) {
      weightKg = weight * 0.453592; // pounds to kg
      heightM = height * 0.0254; // inches to meters
    }

    const bmi = weightKg / (heightM * heightM);
    return Math.round(bmi * 10) / 10;
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5)
      return {
        category: "Underweight",
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        icon: "📉",
      };
    if (bmi < 25)
      return {
        category: "Normal Weight",
        color: "text-green-600",
        bgColor: "bg-green-100",
        icon: "✅",
      };
    if (bmi < 30)
      return {
        category: "Overweight",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        icon: "⚠️",
      };
    return {
      category: "Obese",
      color: "text-red-600",
      bgColor: "bg-red-100",
      icon: "🚨",
    };
  };

  return { calculateBMI, getBMICategory };
};

// History reducer
const historyReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      const newEntry = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        bmi: action.payload.bmi,
        weight: action.payload.weight,
        height: action.payload.height,
        category: action.payload.category,
        timestamp: new Date().toISOString(),
      };

      const updatedHistory = [newEntry, ...state].slice(0, 7); // Keep only 7 entries
      localStorage.setItem("bmiHistory", JSON.stringify(updatedHistory));
      return updatedHistory;

    case "LOAD_HISTORY":
      return action.payload || [];

    default:
      return state;
  }
};

// Clean Header Component (Option 1 Approach)
const CleanHeader = () => (
  <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white p-6 rounded-2xl mb-6 shadow-2xl">
    <div className="flex items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
          <Calculator className="w-8 h-8" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            Josh's BMI Calculator Pro
          </h1>
          <p className="text-blue-100 mt-1">
            Professional Health Assessment Tool
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Dedicated Feature Callout Section
const FeatureCallout = () => (
  <div className="mb-8">
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Why Choose Our BMI Calculator?
        </h2>
        <p className="text-gray-600">
          Professional-grade features for accurate health assessment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1: Accurate Results */}
        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-xl">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Accurate Results</h3>
          <p className="text-sm text-gray-600">
            Precise calculations using WHO-approved BMI formulas with support
            for both metric and imperial units
          </p>
        </div>

        {/* Feature 2: 7-Day Tracking */}
        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-xl">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">7-Day Tracking</h3>
          <p className="text-sm text-gray-600">
            Monitor your BMI trends over time with interactive charts and
            comprehensive history logs
          </p>
        </div>

        {/* Feature 3: Smart Validation */}
        <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
          <div className="bg-gradient-to-br from-purple-500 to-teal-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 shadow-lg group-hover:shadow-xl">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-semibold text-gray-800 mb-2">Smart Validation</h3>
          <p className="text-sm text-gray-600">
            Real-time input validation with helpful error messages to ensure
            data accuracy
          </p>
        </div>
      </div>

      {/* Bottom highlight bar */}
      <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border-l-4 border-purple-500">
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-purple-600" />
            <span className="font-medium">Instant Results</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="font-medium">Data Privacy</span>
          </div>
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4 text-teal-600" />
            <span className="font-medium">Medical-Grade Accuracy</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Input Form Component (same as before)
const InputForm = ({ onCalculate, isLoading }) => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [isMetric, setIsMetric] = useState(true);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateInputs = () => {
    const newErrors = {};

    if (!weight || weight <= 0) {
      newErrors.weight = "Please enter a valid weight";
    }
    if (!height || height <= 0) {
      newErrors.height = "Please enter a valid height";
    }

    if (isMetric) {
      if (weight > 500) newErrors.weight = "Weight seems unrealistic";
      if (height > 3)
        newErrors.height = "Height should be in meters (e.g., 1.75)";
    } else {
      if (weight > 1000) newErrors.weight = "Weight seems unrealistic";
      if (height > 120) newErrors.height = "Height should be in inches";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      onCalculate(parseFloat(weight), parseFloat(height), isMetric);
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    validateInputs();
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center mb-6">
        <User className="w-6 h-6 text-purple-600 mr-3" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Your Information
        </h2>
      </div>

      {/* Unit Toggle */}
      <div className="mb-6">
        <div className="flex items-center justify-center bg-gray-100 rounded-full p-1">
          <button
            type="button"
            onClick={() => setIsMetric(true)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              isMetric
                ? "bg-white shadow-md text-purple-600 font-medium"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Metric (kg/m)
          </button>
          <button
            type="button"
            onClick={() => setIsMetric(false)}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              !isMetric
                ? "bg-white shadow-md text-purple-600 font-medium"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Imperial (lbs/in)
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Weight Input */}
        <div className="space-y-2">
          <label className="flex items-center text-gray-700 font-medium">
            <Scale className="w-4 h-4 mr-2 text-purple-600" />
            Weight {isMetric ? "(kg)" : "(lbs)"}
          </label>
          <div className="relative">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              onBlur={() => handleBlur("weight")}
              placeholder={isMetric ? "e.g., 70" : "e.g., 154"}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                errors.weight && touched.weight
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-200 focus:border-purple-400"
              } bg-gray-50 focus:bg-white`}
              step="0.1"
            />
            {errors.weight && touched.weight && (
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.weight}
              </div>
            )}
          </div>
        </div>

        {/* Height Input */}
        <div className="space-y-2">
          <label className="flex items-center text-gray-700 font-medium">
            <Ruler className="w-4 h-4 mr-2 text-purple-600" />
            Height {isMetric ? "(m)" : "(inches)"}
          </label>
          <div className="relative">
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              onBlur={() => handleBlur("height")}
              placeholder={isMetric ? "e.g., 1.75" : "e.g., 69"}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                errors.height && touched.height
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-200 focus:border-purple-400"
              } bg-gray-50 focus:bg-white`}
              step="0.01"
            />
            {errors.height && touched.height && (
              <div className="flex items-center mt-2 text-red-500 text-sm">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.height}
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            <>
              <Calculator className="w-5 h-5" />
              <span>Calculate BMI</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

// Result Display Component (same as before)
const ResultDisplay = ({ result }) => {
  if (!result) return null;

  const { bmi, category, color, bgColor, icon } = result;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="text-center">
        <div className="mb-6">
          <div className="text-6xl mb-4">{icon}</div>
          <div className="text-5xl font-bold text-gray-800 mb-2">{bmi}</div>
          <div className="text-gray-600 text-lg">Body Mass Index</div>
        </div>

        <div
          className={`inline-flex items-center px-6 py-3 rounded-full ${bgColor} ${color} font-semibold text-lg mb-6`}
        >
          <Award className="w-5 h-5 mr-2" />
          {category}
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="font-medium text-gray-800">Underweight</div>
            <div>&lt; 18.5</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="font-medium text-gray-800">Normal</div>
            <div>18.5 - 24.9</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="font-medium text-gray-800">Overweight</div>
            <div>25.0 - 29.9</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl">
            <div className="font-medium text-gray-800">Obese</div>
            <div>&geq; 30.0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// History Panel Component (same as before)
const HistoryPanel = ({ history }) => {
  if (history.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="flex items-center mb-6">
          <History className="w-6 h-6 text-purple-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800">
            7-Day History
          </h2>
        </div>
        <div className="text-center py-12 text-gray-500">
          <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p className="text-lg">No history yet</p>
          <p className="text-sm">Start calculating to track your BMI</p>
        </div>
      </div>
    );
  }

  // Prepare chart data
  const chartData = history
    .slice()
    .reverse()
    .map((entry, index) => ({
      day: `Day ${index + 1}`,
      bmi: entry.bmi,
      date: entry.date,
    }));

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <TrendingUp className="w-6 h-6 text-purple-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-800">7-Day Trend</h2>
        </div>
        <div className="text-sm text-gray-500">
          {history.length} entr{history.length === 1 ? "y" : "ies"}
        </div>
      </div>

      {/* Chart */}
      <div className="mb-8">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="bmiGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="bmi"
              stroke="#8B5CF6"
              strokeWidth={3}
              fill="url(#bmiGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* History List */}
      <div className="space-y-3 max-h-64 overflow-y-auto">
        {history.map((entry, index) => (
          <div
            key={entry.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-4">
              <div className="text-2xl">{entry.category.icon}</div>
              <div>
                <div className="font-medium text-gray-800">
                  BMI: {entry.bmi}
                </div>
                <div className="text-sm text-gray-600">
                  {entry.category.category}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-800">
                {entry.date}
              </div>
              <div className="text-xs text-gray-500">
                {entry.weight}kg, {entry.height}m
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Component with Option 1 Layout
const BMICalculatorOption1 = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [history, dispatch] = useReducer(historyReducer, []);
  const { calculateBMI, getBMICategory } = useBMICalculator();

  // Load history on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem("bmiHistory");
    if (savedHistory) {
      dispatch({ type: "LOAD_HISTORY", payload: JSON.parse(savedHistory) });
    }
  }, []);

  const handleCalculate = async (weight, height, isMetric) => {
    setIsLoading(true);

    // Simulate API call delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const bmi = calculateBMI(weight, height, isMetric);
    const categoryInfo = getBMICategory(bmi);

    const newResult = {
      bmi,
      ...categoryInfo,
    };

    setResult(newResult);

    // Add to history
    dispatch({
      type: "ADD_ENTRY",
      payload: {
        bmi,
        weight: isMetric ? weight : Math.round(weight * 0.453592 * 10) / 10,
        height: isMetric ? height : Math.round(height * 0.0254 * 100) / 100,
        category: categoryInfo,
      },
    });

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Clean Header (no feature badges) */}
        <CleanHeader />

        {/* Dedicated Feature Callout Section */}
        <FeatureCallout />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <InputForm onCalculate={handleCalculate} isLoading={isLoading} />
          <ResultDisplay result={result} />
        </div>

        <HistoryPanel history={history} />
      </div>
    </div>
  );
};

export default BMICalculatorOption1;
