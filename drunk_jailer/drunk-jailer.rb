def drunkJailer
    createTables
end

#0 Closed #1 Open
def createTables
    @file = File.readlines('./drunk-jailer.txt')
    @prison_lines = @file[0].to_i
    
    @line_count = 1
    @table = []

    for ind in 0...@prison_lines
        @table << []
        for prison in 0...@file[@line_count].to_i
            @table[ind] << 0
        end
        @counter = 1

        while @counter <= @file[@line_count].to_i
            @counter_inner = 0
            while @counter_inner <= @file[@line_count].to_i
                @table[ind][@counter_inner - 1] = 1 if @table[ind][@counter_inner - 1] == 0
                @table[ind][@counter_inner - 1] = 0 if @table[ind][@counter_inner - 1] == 1
                @counter_inner += @counter
                puts @counter_inner if @table[ind][@counter_inner - 1] == 1
                print @table
                puts ' '
            end
            @counter += 1
        end

        @line_count += 1
    end

    

end

drunkJailer