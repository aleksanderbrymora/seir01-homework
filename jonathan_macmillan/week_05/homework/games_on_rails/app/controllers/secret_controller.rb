class SecretController < ApplicationController

  def form
    render :form
  end

  def result
    @n = params['guess'].to_i
    numbers = (1..10).to_a
    @number = numbers.sample
    if @n != @number
      @result = "Sorry, #{@n} is the wrong answer. The computer was thinking of #{@number}"
    else
      @result = "Congrats #{@number} is correct!"
    end
    render :result
  end

end
