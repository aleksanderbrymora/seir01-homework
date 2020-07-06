class MagicController < ApplicationController

  def form
    render :form
  end

  def result
    answers = ["Control, control, you must learn control!", "Train yourself to let go of everything you fear to lose.", "Feel the force!", "You will know when you are calm.. at peace.", "Use your feelings.", "Mind what you've learned.", "The dark side clouds everything.", "Clear your mind must be.", "Already know you that which you need.", "Strong enough, you are not."]
    @answer = answers.sample
    render :result
  end

end
