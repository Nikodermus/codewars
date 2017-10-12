def biggestSquare
   @table = createTable
   @results = createHistograms @table
   @results.each do |max_area|
    puts "Best incoming is #{max_area * 3}"
   end
end

def createTable
 # Get file and its content
 @file = File.readlines('./biggest-square.txt')
 
     #How many areas will be processed
     @file_areas = @file[0].to_i
 
     # Table >> Areas >> Rows
     @table = [];
 
 
     #Which line is being processed so far
     @line_count = 1
 
     
     #For each area let's do:
     for index in 0...@file_areas
         @area_size = []
         @area_size = @file[@line_count].split('')
         @area_height = @area_size[0].to_i
         @area_width = @area_size[1].to_i
         @matrix = []
         @line_count += 1
         for line_index in 0..@area_height
             #break if @line_count > @file.length
             if @file[@line_count]
                 @row = @file[@line_count]
                 .upcase
                 .gsub(/R/, '0')
                 .gsub(/F/, '1')
                 .split('')
                 .map! do |element|
                     element.to_i
                 end
                 @row.pop
                 @matrix << @row
             end
             @line_count += 1
            
         end
         
         #Remove [\n] after each area
         @matrix.pop unless index+1 == @file_areas
         
         #Add area (as matrix) to the table
         @table << @matrix
        end
    @table
end

def createHistograms(table)
    @histograms = []

    #For each area add an empty array
    for area_ind in 0...table.length
        @histograms << []

        #For each row in the area, start it with a 0
        for row_ind in 0...table[area_ind].length
           @histograms[area_ind] << 0 
        end
    end

    @max_area = 0
    @histograms_max_area = []
    @current_area = 0
    #Areas
    for area_ind in 0...table.length
        #Areas >> Rows
        for row_ind in 0...table[area_ind].length
            #Areas >> Rows >> Items
            for item_ind in 0...table[area_ind][row_ind].length
                #Is the item a 1 that adds or a 0 that resets?
                if table[area_ind][row_ind][item_ind] > 0
                    @histograms[area_ind][row_ind] += 1
                else
                    @histograms[area_ind][row_ind] = 0
                end
            end 
          
            @current_area = maximumHistogramArea @histograms[area_ind]
            #puts @current_area
           # puts "La max area actual es de #{@max_area} para #{area_ind + 1}"
            if @current_area > @max_area
                @max_area = @current_area
            end
        end
        @histograms_max_area << @max_area
    end
    @histograms_max_area
end

def maximumHistogramArea histogram
 
    @stack = []

    #Iterate over each histogram
    for value_ind in 0...histogram.length

        #The first time add the index to the stach
        if value_ind == 0
            @stack << value_ind 

        #Next times compare wether the value of the index is bigger than the top of the stack
        else
            if histogram[value_ind] >= histogram[@stack.last]
                @stack << value_ind
               
            end
        end
    end


    #Record the values 
    @max_area = 0
    @original_length = @stack.length
    for ind in 0...@original_length
        
        @area = 0
        @top_value = @stack.pop
        if @stack.length == 0
            @area = histogram[@top_value] * (@original_length - 1)
            puts "#{@stack} = #{histogram[@top_value]} * #{ @original_length-1} = #{@area}"
            if @area > @max_area 
                @max_area = @area 
            end
        else
            @area = @top_value * ( (@original_length - 1) - @stack.last - 1)
            puts "#{@stack} = #{@top_value} * (#{@original_length-1} - #{@stack.last} - 1)  = #{@area}"
            if @area > @max_area 
                @max_area = @area
        
            end
        end
   
    end
    @max_area
end

maximumHistogramArea [0,1,0,0,0]
#biggestSquare