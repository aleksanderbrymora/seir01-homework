# # Calculator
#
# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour


require 'pry'# require the Gem into this ruby program
require 'rainbow'


def show_menu
  puts "Calculator"
  puts "-=" * 40 # el cheapo horizontal dividing line
  puts "[a] - addition"
  puts "[s] - subtraction"
  puts "[m] - multiplication"
  puts "[d] - division"
  puts "[e] - exponents"
  puts "[r] - square root"
  puts "[q] - quit"
  puts "[mtg] - mortgage calculator"
  print "Enter your choice: "
end



show_menu
menu_choice = gets.chomp.downcase


until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "What's the first number you would like to add? "
    num1 = gets.to_f
    puts "What's the second number you would like to add? "
    num2 = gets.to_f
    puts "The answer is #{num1 + num2}"
  when 's'
    puts "What's the number you would like to subtract from? "
    num1 = gets.to_f
    puts "What's the number you would like to subtract? "
    num2 = gets.to_f
    puts "The answer is #{num1 - num2}"
  when 'm'
    puts "What's the first number you would like to multiply? "
    num1 = gets.to_f
    puts "What's the second number you would like to multiply? "
    num2 = gets.to_f
    puts "The answer is #{num1 * num2}"
  when 'd'
    puts "What's the number you would like to divide from? "
    num1 = gets.to_f
    puts "What's the number you would like to divide by? "
    num2 = gets.to_f
    puts "The answer is #{num1 / num2}"
  when 'e'
    puts "What's the number you would like as the base? "
    num1 = gets.to_f
    puts "What's the number you would like as the exponent? "
    num2 = gets.to_f
    puts "The answer is #{num1 ** num2}"
  when 'r'
    puts "What's the number you would like the square root of? "
    num1 = gets.to_f
    puts "The answer is #{Integer.sqrt(num1)}"
  when 'mtg'
    puts "What's the mortgage amount? "
    principle = gets.to_f
    puts "What's the annual interest rate? "
    annual = gets.to_f
    rate = (annual/12)/100
    puts "How many months do you have remaining on this loan? "
    months = gets.to_i
    puts "Your monthly payment is #{( (rate * principle * ((1+ rate ) **  months))/(((1 + rate) ** months) - 1))}"
  else
    puts "invalid selection."
    # binding.pry # pause the program at this line Inside pry
  end
  show_menu
  menu_choice = gets.chomp.downcase
end
  # do calculating: TODO: homework goes here
  #show the menu again
  #get the user choice again
#end

puts "thanks for using crappy calculator!"
