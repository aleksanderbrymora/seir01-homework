require 'pry'



# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.


# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# ```
#

# #### Hints:
# * Work out how you would do it on paper first! Then start to explain that process in Ruby.
# * Get the program to work for a single line before trying to tackle multiple lines.
# * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```gets``` later to make it more interactive.
# * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# * The key to the lab is finding the index positions of each stop. (hint: ```index```)
# * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)






def plan_trip(stop1, line1, stop2, line2)

  trains = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  transfer = "Union Square"                             #DEFAULT TRANSFER STATION
  if line1 != line2 && stop1 == "Union Square"          #PREVENTS BOARDING THE WRONG TRAIN AT UNION SQUARE
    puts "Just board the correct train."
    line1 = line2
  end
  if line1 == line2                       #there may be a clearer way to do this, but this allows a single train line output
    transfer = stop2
  end

  route1 = trains[line1]                  #this is just for readability
  route2 = trains[line2]

  if route1.index(stop1) < route1.index(transfer)         #this always fires, and is either the only or first segment
    first_path = route1[(route1.index(stop1) + 1)..(route1.index(transfer))]
    puts "You must travel through the following stops on the #{line1} line: #{first_path.join(", ")}."
  else
    uptown = route1.reverse()
    first_path = uptown[(uptown.index(stop1) + 1)..(uptown.index(transfer))]
    puts "You must travel through the following stops on the #{line1} line: #{first_path.join(", ")}."
  end
  if line2 == line1
     puts "A total of #{first_path.length} stops."
  end

  if line1 != line2                                     #this only fires if there's a second line
    puts "Transfer at Union Square."
    if route2.index("Union Square") < route2.index(stop2)
      second_path = route2[(route2.index("Union Square") + 1)..(route2.index(stop2))]
      puts "You must continue through the following stops on the #{line2} line: #{second_path.join(", ")}."
    else
      uptown = route2.reverse()
      second_path = uptown[(uptown.index("Union Square") + 1)..(uptown.index(stop2))]
      puts "You must continue through the following stops on the #{line2} line: #{second_path.join(", ")}."
    end
    puts "A total of #{first_path.length + second_path.length} stops."
  end

end









# puts "Times Square", "N", "28th", "N"
# plan_trip "Times Square", "N", "28th", "N"
#
# puts "Union Square", "6", "Grand Central", "6"
# plan_trip "Union Square", "6", "Grand Central", "6"
#
# puts "Union Square", "L", "Grand Central", "6"
# plan_trip "Union Square", "L", "Grand Central", "6"
#
# puts "33rd", "6", "Union Square", "N"
# plan_trip "33rd", "6", "Union Square", "N"



#############DONE##############
# if the trains lines are equal only do the first half of the code

#if the t

















##################################### SINGLE LINE #############################################
#
# def plan_trip(stop1, line1, stop2)
#
#   trains = {
#     "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
#     # :l_line => {:name => "L", :stops => ["8th", "6th", "Union Square", "3rd", "1st"]},
#     # :six_line => {:name => "6", :stops => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]}
#   }
#
#   # if trains.each {|t| trains.values[t][:name]} == station1  this is to select the right starting train
#
#   route = trains[line1]
#
#   if route.index(stop1) < route.index(stop2)
#     binding.pry
#     downtown_path = route[(route.index(stop1) + 1)..(route.index(stop2))]
#     puts "You must travel through the following stops on the N line: #{downtown_path.to_s}"
#   else
#     uptown = route.reverse()
#     uptown_path = uptown[(uptown.index(stop1) + 1)..(uptown.index(stop2))].to_s
#     puts "You must travel through the following stops on the N line: #{uptown_path.to_s}"
#     # binding.pry
#
#   end
#   puts "A total of #{route.index(stop1) - route.index(stop2)} stops"
#
# end
#
#
#
# plan_trip "8th", "N", "Times Square"
