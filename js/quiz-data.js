// Quiz data structure
const quizData = {
    beginner: [
        {
            question: "What is Pandas primarily used for?",
            options: [
                "Game development",
                "Data manipulation and analysis",
                "Web development",
                "Machine learning model training"
            ],
            correctAnswer: 1
        },
        {
            question: "Which data structure does Pandas primarily use?",
            options: [
                "Lists",
                "Arrays",
                "DataFrames",
                "Tuples"
            ],
            correctAnswer: 2
        },
        {
            question: "How do you import Pandas in Python?",
            options: [
                "import pd",
                "import pandas as pd",
                "import pandas",
                "from pandas import *"
            ],
            correctAnswer: 1
        },
        {
            question: "What does df.head() return?",
            options: [
                "Last 5 rows of DataFrame",
                "First 5 rows of DataFrame",
                "Column names",
                "Random rows"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you check for missing values in a DataFrame?",
            options: [
                "df.missing()",
                "df.isnull()",
                "df.na()",
                "df.find_null()"
            ],
            correctAnswer: 1
        },
        {
            question: "Which method is used to get DataFrame summary statistics?",
            options: [
                "df.summary()",
                "df.describe()",
                "df.stats()",
                "df.info()"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you select a column 'age' from DataFrame df?",
            options: [
                "df['age']",
                "df.age",
                "Both a and b",
                "df.select('age')"
            ],
            correctAnswer: 2
        },
        {
            question: "What does df.shape return?",
            options: [
                "Column names",
                "Number of missing values",
                "(Rows, Columns)",
                "Data types"
            ],
            correctAnswer: 2
        },
        {
            question: "How do you drop missing values from a DataFrame?",
            options: [
                "df.dropna()",
                "df.remove_na()",
                "df.delna()",
                "df.clean()"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.reset_index() do?",
            options: [
                "Deletes the index",
                "Resets index to default integers",
                "Sorts the DataFrame",
                "Drops all columns"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you rename columns in a DataFrame?",
            options: [
                "df.rename_columns()",
                "df.columns.rename()",
                "df.rename()",
                "df.set_columns()"
            ],
            correctAnswer: 2
        },
        {
            question: "What does df.info() display?",
            options: [
                "Summary statistics",
                "Column names and data types",
                "First 5 rows",
                "Correlation matrix"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you create a DataFrame from a dictionary?",
            options: [
                "pd.DataFrame.from_dict()",
                "pd.create(dict)",
                "pd.dict_to_df()",
                "pd.from_dictionary()"
            ],
            correctAnswer: 0
        },
        {
            question: "What does the 'axis' parameter represent in Pandas operations?",
            options: [
                "The plot axis",
                "Rows (0) or columns (1)",
                "The chart type",
                "The data source"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you select rows by index label?",
            options: [
                "df.iloc[]",
                "df.loc[]",
                "df.select[]",
                "df.filter[]"
            ],
            correctAnswer: 1
        },
        {
            question: "What does df.tail(3) return?",
            options: [
                "First 3 rows",
                "Last 3 rows",
                "Random 3 rows",
                "3 columns"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you change a column's data type to string?",
            options: [
                "df['col'].to_string()",
                "df['col'] = df['col'].astype(str)",
                "df.convert('col', str)",
                "df['col'].as_string()"
            ],
            correctAnswer: 1
        },
        {
            question: "What does df.columns return?",
            options: [
                "The data types of columns",
                "The column names as an Index object",
                "The number of columns",
                "The first row values"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you create a Series in Pandas?",
            options: [
                "pd.Series()",
                "pd.create_series()",
                "pd.array_to_series()",
                "pd.new_series()"
            ],
            correctAnswer: 0
        },
        {
            question: "What is the difference between Series and DataFrame?",
            options: [
                "Series is 1D, DataFrame is 2D",
                "Series has no index",
                "DataFrame can't have mixed types",
                "Series is faster"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you select multiple columns?",
            options: [
                "df[['col1', 'col2']]",
                "df.select('col1', 'col2')",
                "df.get(['col1', 'col2'])",
                "df.cols('col1', 'col2')"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.drop('col', axis=1) do?",
            options: [
                "Deletes the column 'col'",
                "Drops rows with missing values in 'col'",
                "Sorts by column 'col'",
                "Groups by column 'col'"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you count unique values in a column?",
            options: [
                "df['col'].count()",
                "df['col'].unique_count()",
                "df['col'].nunique()",
                "df['col'].distinct()"
            ],
            correctAnswer: 2
        },
        {
            question: "What does df.sort_values('col') do?",
            options: [
                "Sorts the DataFrame by 'col'",
                "Returns unique values in 'col'",
                "Counts values in 'col'",
                "Groups by 'col'"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you filter rows where 'age' > 30?",
            options: [
                "df[df.age > 30]",
                "df.filter(age > 30)",
                "df.select('age' > 30)",
                "df.where('age' > 30)"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.describe() show for numeric columns?",
            options: [
                "count, mean, std, min, max, etc.",
                "only mean and median",
                "only count of non-null values",
                "data type and memory usage"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you save a DataFrame to CSV?",
            options: [
                "df.to_csv()",
                "df.save_csv()",
                "df.export_csv()",
                "pd.save_csv(df)"
            ],
            correctAnswer: 0
        },
        {
            question: "What does pd.read_csv() return?",
            options: [
                "A dictionary",
                "A DataFrame",
                "A list",
                "A Series"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you concatenate two DataFrames vertically?",
            options: [
                "pd.concat([df1, df2])",
                "df1 + df2",
                "pd.merge(df1, df2)",
                "df1.join(df2)"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.duplicated() return?",
            options: [
                "Count of duplicate rows",
                "Boolean Series indicating duplicates",
                "DataFrame without duplicates",
                "List of duplicate indices"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you drop duplicate rows?",
            options: [
                "df.drop_duplicates()",
                "df.remove_duplicates()",
                "df.unique()",
                "df.deduplicate()"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.sample(5) do?",
            options: [
                "Returns first 5 rows",
                "Returns random 5 rows",
                "Returns last 5 rows",
                "Returns 5 columns"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you set an index column?",
            options: [
                "df.set_index()",
                "df.index_col()",
                "df.make_index()",
                "df.create_index()"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.at[] do?",
            options: [
                "Access a single value by label",
                "Access a group of rows",
                "Add a new column",
                "Aggregate values"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you calculate the mean of a column?",
            options: [
                "df['col'].average()",
                "df['col'].mean()",
                "df['col'].sum() / df['col'].count()",
                "Both b and c"
            ],
            correctAnswer: 3
        },
        {
            question: "What does df.corr() compute?",
            options: [
                "Count of non-null values",
                "Correlation between columns",
                "Cumulative sum",
                "Cross-tabulation"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you create a new column based on existing ones?",
            options: [
                "df['new'] = df['col1'] + df['col2']",
                "df.add_column('new', df['col1'] + df['col2'])",
                "df.insert('new', df['col1'] + df['col2'])",
                "df.create('new', df['col1'] + df['col2'])"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.groupby('col').size() return?",
            options: [
                "Mean of each group",
                "Count of items in each group",
                "Sum of each group",
                "Standard deviation of each group"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you apply a function to each element in a column?",
            options: [
                "df['col'].apply(func)",
                "df.apply_to('col', func)",
                "df.map('col', func)",
                "df.function('col', func)"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.pivot_table() do?",
            options: [
                "Creates a spreadsheet-style pivot table",
                "Transposes the DataFrame",
                "Converts to long format",
                "Reshapes to 3D"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you merge two DataFrames?",
            options: [
                "pd.merge(df1, df2)",
                "df1.join(df2)",
                "pd.concat([df1, df2])",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "What does df.memory_usage() show?",
            options: [
                "Memory usage of each column",
                "Total memory used by DataFrame",
                "Memory available for operations",
                "Both a and b"
            ],
            correctAnswer: 3
        },
        {
            question: "How do you convert a DataFrame to a NumPy array?",
            options: [
                "df.to_numpy()",
                "np.array(df)",
                "df.values",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "What does df.explode('col') do?",
            options: [
                "Deletes the column",
                "Transforms list-like elements to rows",
                "Converts to JSON",
                "Splits strings"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you handle datetime columns?",
            options: [
                "pd.to_datetime(df['col'])",
                "df['col'].as_datetime()",
                "df.convert_datetime('col')",
                "pd.datetime(df['col'])"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.rolling(5).mean() compute?",
            options: [
                "Moving average with window 5",
                "Cumulative sum",
                "Standard deviation",
                "Median"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you create dummy variables?",
            options: [
                "pd.get_dummies(df)",
                "df.create_dummies()",
                "df.to_dummies()",
                "pd.dummy(df)"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.style do?",
            options: [
                "Changes the display style",
                "Adds CSS styling",
                "Formats output",
                "All of the above"
            ],
            correctAnswer: 3
        }
    ],
    intermediate: [
        {
            question: "How do you select rows where 'age' > 30?",
            options: [
                "df[df['age'] > 30]",
                "df.select(df['age'] > 30)",
                "df.filter('age' > 30)",
                "df.query('age > 30')"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.loc[] do?",
            options: [
                "Selects by integer position",
                "Selects by label/index",
                "Drops columns",
                "Sorts values"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you select rows 5 to 10 using iloc?",
            options: [
                "df.iloc[5:10]",
                "df.iloc[5,10]",
                "df.loc[5:10]",
                "df.iloc[[5,10]]"
            ],
            correctAnswer: 0
        },
        {
            question: "What is the correct way to filter rows where 'gender' is 'Male'?",
            options: [
                "df[df.gender == 'Male']",
                "df.filter(gender='Male')",
                "df.select('gender' == 'Male')",
                "df.where('gender' == 'Male')"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you select multiple columns ('name', 'age')?",
            options: [
                "df[['name', 'age']]",
                "df.select('name', 'age')",
                "df.get(['name', 'age'])",
                "df.cols('name', 'age')"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.query('salary > 50000') do?",
            options: [
                "Drops rows where salary > 50000",
                "Filters rows where salary > 50000",
                "Updates salary values",
                "Returns column names"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you select unique values in a column 'city'?",
            options: [
                "df['city'].distinct()",
                "df['city'].unique()",
                "df.unique('city')",
                "df.select_unique('city')"
            ],
            correctAnswer: 1
        },
        {
            question: "What does df.sample(5) do?",
            options: [
                "Returns first 5 rows",
                "Returns random 5 rows",
                "Sorts DataFrame",
                "Deletes 5 rows"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you rename a column 'old_name' to 'new_name'?",
            options: [
                "df.rename(columns={'old_name':'new_name'})",
                "df.columns['old_name'] = 'new_name'",
                "df.set_column('old_name', 'new_name')",
                "df.update_column('old_name', 'new_name')"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.at[3, 'age'] return?",
            options: [
                "Value at row 3, column 'age'",
                "All values in column 'age'",
                "First 3 rows of 'age'",
                "Boolean mask"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you sort a DataFrame by column 'salary' in descending order?",
            options: [
                "df.sort('salary', ascending=False)",
                "df.sort_values('salary', ascending=False)",
                "df.order_by('salary', desc=True)",
                "df.arrange('salary', ascending=False)"
            ],
            correctAnswer: 1
        },
        {
            question: "What does df.groupby('department') do?",
            options: [
                "Drops the 'department' column",
                "Groups data by 'department'",
                "Sorts by 'department'",
                "Filters rows"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you apply a function to each element in a column?",
            options: [
                "df['column'].apply(function)",
                "df.apply_to('column', function)",
                "df.map('column', function)",
                "df.function('column')"
            ],
            correctAnswer: 0
        },
        {
            question: "What does pd.concat([df1, df2]) do?",
            options: [
                "Merges DataFrames based on a key",
                "Combines DataFrames vertically",
                "Joins DataFrames horizontally",
                "Compares DataFrames"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you merge two DataFrames on a common column 'id'?",
            options: [
                "df1.join(df2, on='id')",
                "pd.merge(df1, df2, on='id')",
                "df1.concat(df2, on='id')",
                "df1.combine(df2, by='id')"
            ],
            correctAnswer: 1
        },
        {
            question: "What does df.pivot_table() do?",
            options: [
                "Creates a summary table with aggregations",
                "Transposes the DataFrame",
                "Drops duplicate rows",
                "Converts to a NumPy array"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you add a new column 'bonus' as 10% of 'salary'?",
            options: [
                "df['bonus'] = df['salary'] * 0.1",
                "df.new_column('bonus', df['salary'] * 0.1)",
                "df.insert('bonus', df['salary'] * 0.1)",
                "df.apply('bonus', df['salary'] * 0.1)"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.drop_duplicates() do?",
            options: [
                "Removes duplicate rows",
                "Drops missing values",
                "Deletes the last row",
                "Randomly shuffles rows"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you change the data type of a column to float?",
            options: [
                "df['column'].to_float()",
                "df['column'] = df['column'].astype(float)",
                "df.change_type('column', float)",
                "df.convert('column', 'float')"
            ],
            correctAnswer: 1
        },
        {
            question: "What does df.fillna(0) do?",
            options: [
                "Drops missing values",
                "Replaces missing values with 0",
                "Counts missing values",
                "Fills with random numbers"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you apply multiple aggregations (mean, sum) in groupby?",
            options: [
                "df.groupby('dept').agg(['mean', 'sum'])",
                "df.groupby('dept').apply(['mean', 'sum'])",
                "df.groupby('dept').aggregate('mean', 'sum')",
                "df.groupby('dept').multiple(['mean', 'sum'])"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.corr() return?",
            options: [
                "Correlation matrix",
                "Covariance matrix",
                "Unique values",
                "Missing value counts"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you convert a DataFrame to a NumPy array?",
            options: [
                "df.to_numpy()",
                "df.as_array()",
                "np.array(df)",
                "df.values()"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.explode('column') do?",
            options: [
                "Transforms list-like elements into separate rows",
                "Deletes the column",
                "Converts to JSON",
                "Drops duplicates"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you save a DataFrame to a CSV file?",
            options: [
                "df.to_csv('file.csv')",
                "df.save('file.csv')",
                "df.export_csv('file.csv')",
                "pd.save_csv(df, 'file.csv')"
            ],
            correctAnswer: 0
        },
        {
            question: "What does pd.read_excel('file.xlsx') do?",
            options: [
                "Reads an Excel file into a DataFrame",
                "Exports DataFrame to Excel",
                "Reads a CSV file",
                "Converts Excel to JSON"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you handle datetime conversion in Pandas?",
            options: [
                "pd.to_datetime(df['date'])",
                "df['date'].as_datetime()",
                "df.convert_datetime('date')",
                "pd.datetime(df['date'])"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.rolling(5).mean() compute?",
            options: [
                "Moving average with window 5",
                "Cumulative sum",
                "Standard deviation",
                "Median"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you apply a custom function to groups?",
            options: [
                "df.groupby('key').apply(func)",
                "df.groupby('key').agg(func)",
                "df.groupby('key').map(func)",
                "df.groupby('key').transform(func)"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.nlargest(3, 'salary') return?",
            options: [
                "3 rows with highest salary",
                "3 smallest salaries",
                "Top 3 columns",
                "Random 3 rows"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you handle outliers in a column?",
            options: [
                "Remove rows with df[df['col'] < threshold]",
                "Use df.clip(lower, upper)",
                "Delete the column",
                "Fill with mean"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you merge two DataFrames with different key column names?",
            options: [
                "pd.merge(df1, df2, left_on='key1', right_on='key2')",
                "df1.join(df2, key1='key2')",
                "pd.concat(df1, df2, keys=['key1', 'key2'])",
                "df1.merge(df2, on=['key1', 'key2'])"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.melt() do?",
            options: [
                "Converts wide to long format",
                "Aggregates data",
                "Drops missing values",
                "Computes statistics"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you compute percentage change between rows?",
            options: [
                "df['col'].pct_change()",
                "df['col'].diff()",
                "df['col'].percent_change()",
                "df['col'].change()"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you handle categorical data encoding?",
            options: [
                "pd.get_dummies(df)",
                "df.encode()",
                "df.categorize()",
                "pd.encode_categories(df)"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.style.highlight_max() do?",
            options: [
                "Adds CSS styling to highlight max values",
                "Computes max values",
                "Deletes max values",
                "Sorts by max"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you resample time-series data to monthly frequency?",
            options: [
                "df.resample('M').mean()",
                "df.groupby('month')",
                "df.rolling('30D')",
                "df.asfreq('M')"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you apply a condition to update a column?",
            options: [
                "df.loc[df['score'] > 90, 'grade'] = 'A'",
                "df.update('score' > 90, 'grade', 'A')",
                "df['grade'][df['score'] > 90] = 'A'",
                "df.set('grade', 'A').where(df['score'] > 90)"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.eval('col1 + col2') do?",
            options: [
                "Evaluates a mathematical expression",
                "Drops columns",
                "Filters rows",
                "Computes correlation"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you chain multiple Pandas operations?",
            options: [
                "Use method chaining: df.query().groupby().mean()",
                "Separate with commas",
                "Use a loop",
                "Store intermediate variables"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.to_dict() return?",
            options: [
                "Dictionary of column names to data types",
                "Dictionary representation of DataFrame",
                "Dictionary of index to values",
                "Dictionary of column statistics"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you calculate cumulative sum?",
            options: [
                "df['col'].cumsum()",
                "df['col'].sum()",
                "df['col'].total()",
                "df['col'].aggregate('sum')"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.isin() do?",
            options: [
                "Checks if values are in a sequence",
                "Identifies missing values",
                "Checks data types",
                "Validates column names"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you calculate row-wise operations?",
            options: [
                "df.apply(func, axis=1)",
                "df.row_apply(func)",
                "df.by_row(func)",
                "df.for_each_row(func)"
            ],
            correctAnswer: 0
        },
        {
            question: "What does df.stack() do?",
            options: [
                "Compresses the DataFrame",
                "Converts wide to long format",
                "Sorts the DataFrame",
                "Groups columns"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you handle timezone-aware datetimes?",
            options: [
                "df.tz_localize() and df.tz_convert()",
                "df.set_timezone()",
                "df.convert_tz()",
                "pd.timezone_convert()"
            ],
            correctAnswer: 0
        }
    ],
    advanced: [
        {
            question: "How do you optimize memory usage in a large DataFrame?",
            options: [
                "Use appropriate data types (e.g., category for strings)",
                "Delete the DataFrame after use",
                "Only work with small samples",
                "All of the above"
            ],
            correctAnswer: 0
        },
        {
            question: "What is the most efficient way to apply a complex function to a DataFrame?",
            options: [
                "df.apply()",
                "Vectorized operations",
                "Iterrows()",
                "List comprehension"
            ],
            correctAnswer: 1
        },
        {
            question: "How do you handle large datasets that don't fit in memory?",
            options: [
                "Use pd.read_csv() with chunksize",
                "Switch to a database",
                "Use Dask or Vaex",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the best way to join multiple large DataFrames?",
            options: [
                "pd.concat() all at once",
                "Merge sequentially",
                "Use database-style joins",
                "Avoid joins entirely"
            ],
            correctAnswer: 2
        },
        {
            question: "How do you parallelize Pandas operations?",
            options: [
                "df.parallel_apply()",
                "Use multiprocessing",
                "Use Dask or Modin",
                "All of the above"
            ],
            correctAnswer: 2
        },
        {
            question: "What is the most efficient way to filter rows?",
            options: [
                "Boolean indexing",
                "df.query()",
                "df.filter()",
                "They're equally efficient"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you optimize groupby operations?",
            options: [
                "Use categorical variables for grouping",
                "Pre-sort the data",
                "Use smaller DataFrames",
                "Avoid groupby entirely"
            ],
            correctAnswer: 0
        },
        {
            question: "What is the best way to handle high-cardinality categorical data?",
            options: [
                "One-hot encoding",
                "Label encoding",
                "Target encoding",
                "Hashing trick"
            ],
            correctAnswer: 3
        },
        {
            question: "How do you implement a rolling window with custom weights?",
            options: [
                "df.rolling().apply() with weights",
                "Create a custom window function",
                "Use numpy.convolve",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the most efficient way to update many cells?",
            options: [
                "df.loc[] with conditions",
                "Iterate with iterrows()",
                "Use numpy.where",
                "Use df.update()"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you implement a custom expanding window function?",
            options: [
                "df.expanding().apply()",
                "Create a custom expanding class",
                "Use cumsum() patterns",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the best way to handle irregular time series?",
            options: [
                "Resample to regular intervals",
                "Use asfreq() with fill method",
                "Keep as irregular",
                "Convert to unix timestamps"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you implement a custom aggregation function?",
            options: [
                "df.groupby().agg()",
                "df.groupby().apply()",
                "Create a custom aggregation class",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the best way to handle nested JSON data?",
            options: [
                "json_normalize()",
                "Manual parsing",
                "Avoid nested JSON",
                "Convert to XML first"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you implement a custom resampler?",
            options: [
                "Subclass Resampler",
                "Use apply() with custom logic",
                "Pre-compute all possibilities",
                "Avoid resampling"
            ],
            correctAnswer: 0
        },
        {
            question: "What is the most efficient way to compute rolling correlations?",
            options: [
                "df.rolling().corr()",
                "Manual computation with numpy",
                "Avoid rolling correlations",
                "Use specialized libraries"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you handle time zones in operations?",
            options: [
                "Convert to UTC first",
                "Keep original timezones",
                "Ignore timezones",
                "Use naive datetimes"
            ],
            correctAnswer: 0
        },
        {
            question: "What is the best way to implement a custom interpolation method?",
            options: [
                "Subclass Interpolator",
                "Use apply() with custom logic",
                "Pre-compute all values",
                "Avoid interpolation"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you optimize memory usage for string columns?",
            options: [
                "Convert to category dtype",
                "Use string methods",
                "Avoid string columns",
                "Compress strings"
            ],
            correctAnswer: 0
        },
        {
            question: "What is the best way to handle sparse data?",
            options: [
                "Use sparse data structures",
                "Fill with zeros",
                "Remove sparse columns",
                "Use dense representation"
            ],
            correctAnswer: 0
        },
        {
            question: "How do you implement a custom window function?",
            options: [
                "Subclass Rolling",
                "Use apply() with custom logic",
                "Use numpy strides",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the best way to handle missing data in time series?",
            options: [
                "Interpolation",
                "Forward fill",
                "Drop missing values",
                "Depends on context"
            ],
            correctAnswer: 3
        },
        {
            question: "How do you implement a custom groupby transformation?",
            options: [
                "df.groupby().transform()",
                "df.groupby().apply()",
                "Manual grouping",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the best way to handle high-frequency data?",
            options: [
                "Downsample",
                "Use specialized formats",
                "Store as numpy arrays",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "How do you implement a custom join operation?",
            options: [
                "pd.merge() with custom logic",
                "Manual joining",
                "Use database functions",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "What is the best way to optimize read_csv performance?",
            options: [
                "Specify dtypes",
                "Use chunks",
                "Read only needed columns",
                "All of the above"
            ],
            correctAnswer: 3
        },
        {
            question: "How do you implement a custom aggregation that depends on multiple columns?",
            options: [
                "df.groupby().apply()",
                "Create intermediate columns",
                "Use eval()",
                "All of the above"
            ],
            correctAnswer: 3
        },
        // Add more beginner questions here...
    ]
};

// Function to get random questions from a category
function getRandomQuestions(difficulty, count) {
    const allQuestions = [...quizData[difficulty]];
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to add new questions
function addQuestions(difficulty, newQuestions) {
    if (!quizData[difficulty]) {
        quizData[difficulty] = [];
    }
    quizData[difficulty].push(...newQuestions);
    return quizData[difficulty];
}