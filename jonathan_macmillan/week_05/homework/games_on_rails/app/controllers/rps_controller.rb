class RpsController < ApplicationController

  def form
    render :form
  end

  def result
    array = ['rock', 'scissors', 'paper']
    @computer_guess = array.sample
    @human_guess = params['guess']
    if @human_guess == @computer_guess
      @result = "Draw, you both picked #{@computer_guess}"
    elsif @human_guess == "rock"
      if @computer_guess == "scissors"
        @result = "You win, the computer picked #{@computer_guess}"
      else
        @result = "You lose, the computer picked #{@computer_guess}"
      end
    elsif @human_guess == "paper"
      if @computer_guess == "rock"
        @result = "You win, the computer picked #{@computer_guess}"
      else
        @result = "You lose, the computer picked #{@computer_guess}"
      end
    elsif @human_guess == "scissors"
      if @computer_guess == "paper"
        @result = "You win, the computer picked #{@computer_guess}"
      else
        @result = "You lose, the computer picked #{@computer_guess}"
      end
    end
  end
end
