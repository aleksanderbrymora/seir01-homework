class Calc
	def initialize question
		@question = question
		matches
	end

	def matches
		@matches = @question.match(/(-?\d+) (plus|minus|multiplied by|divided by) (-?\d+)/)
	end

	def first_num
		@matches[1].to_i
	end

	def second_num
		@matches[3].to_i
	end

	def operator
		case @matches[2]
		when 'plus' then :+
		when 'minus' then :-
		when 'multiplied by' then :*
		when 'divided by' then :/
		end
	end

	def answer
		first_num.send operator, second_num
	end
end

c1 = Calc.new "What is 4 plus 5?"
c2 = Calc.new "What is 7 minus 5?"
c3 = Calc.new "What is -6 multiplied by 4?"
c4 = Calc.new "What is 25 divided by -5?"

puts c1.answer
puts c2.answer
puts c3.answer
puts c4.answer
