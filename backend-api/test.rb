Input:
flight_length
- duration of the flight in minutes
movies
- array of movie times in minutes
Output:
boolean
- true if there exists TWO different movies that add up EXACTLY to the flight_length
Examples:
flight_length - 160
movies - [80, 110, 40]
=> false
[80, 110, 80]
=> true
[20, 30, 110, 40, 50]
=> true

#two inputs
durationf, an array of movie durations

180
sum
if sum arr[0]+array[1]
array[0] will add with next element in array up to the end of the array. Then, shift and repeat. if all 

arr arr2 = duration
duration - arr = arr2


def flight_movies(duration, array)
    array.each_with_index do |arr, i|
        array.each_with_index{|arr2, i2| 
            if i2 != i
                if arr + arr2 == duration
                    return true
                end
            end
        }
    end
    return false
end