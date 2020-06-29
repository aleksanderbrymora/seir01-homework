def longest num, long = 0, best = 0
	converted = num.to_s(2)
	zero_count = 0
	converted.split('').each do |x|
		if x == '0'
			zero_count += 1
		else
			if long < zero_count
				long = zero_count
				best = num
			end
			zero_count = 0
		end
	end
	num == 0 ? num : longest(num - 1, long, best)
end

puts longest 4