def biggestSquare
    # Get file and its content
    @file = File.readlines('./biggest-square.txt')

    #How many areas will be processed
    file_areas = @file[0].to_i

    # Table >> Areas >> Rows
	@table = [];


    #Which line is being processed so far
	@line_count = 1

    #For each area let's do:
	for index in 0...file_areas
		@table.length
		@area_size = @file[@line_count].split('')
		@area_height = @area_size[0].to_i
		puts @area_height
		@matrix = []
		@line_count += 1
		for line_index in 0..@area_height
			#break if @line_count > @file.length
			if @file[@line_count]
				@column = @file[@line_count]
				.upcase
				.gsub(/R/, '0')
				.gsub(/F/, '1')
				.split('')
				@column.pop
				@matrix << @column
				@line_count += 1
				print "#{@line_count} #{@column}\n" if index == 1
			end
		end
		@matrix.pop
		@table << @matrix
		puts ' '
		print @table[index]
	end
   
end

biggestSquare